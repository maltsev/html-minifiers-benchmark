import url from 'url';
import fs from 'fs';
import { promises as fsPromise } from 'fs';
import { Buffer } from 'node:buffer';
import handlebars from 'handlebars';
import got from 'got';

const urls = JSON.parse(fs.readFileSync('./urls.json', 'utf8'));

const minifiers = {
    htmlminifierterser: await import('./minifiers/htmlminifierterser.js'),
    htmlminifiernext: await import('./minifiers/htmlminifiernext.js'),
    htmlnano: await import('./minifiers/htmlnano.js'),
    minify: await import('./minifiers/minify.js'),
    minifyhtml: await import('./minifiers/minifyhtml.js'),
    swchtml: await import('./minifiers/swchtml.js'),
};

const stats = {};
const rates = {};
const minHtmlBytes = 300;
const minifierNames = Object.keys(minifiers);
const comparablePageUrls = [];

for (const minifierName of minifierNames) {
    fs.mkdirSync('./build/' + minifierName);
}

const promises = urls.map(async (pageUrl) => {
    const pageUrlHostname = url.parse(pageUrl).hostname.replace('www.', '');

    try {
        const html = await fetchPage(pageUrl);
        if (!html) {
            console.warn(`${pageUrl} skipped from report.`);
            return;
        }
        const sourceBytes = utf8ByteLength(html);
        if (sourceBytes < minHtmlBytes) {
            console.warn(`${pageUrl} skipped from report: content too short (${sourceBytes} bytes).`);
            return;
        }

        stats[pageUrl] = {
            url: pageUrl,
            name: pageUrlHostname,
        };
        stats[pageUrl].source = {
            size: KB(sourceBytes),
        };

        const minifierPromises = minifierNames.map(async (minifierName) => {
            const minifierDir = './build/' + minifierName;
            const minifier = minifiers[minifierName].default;

            try {
                const minifiedHtmlRaw = await minifier(html);
                const minifiedHtml = normalizeHtmlOutput(minifiedHtmlRaw);
                const minifiedBytes = utf8ByteLength(minifiedHtml);
                const minifyRate = (sourceBytes - minifiedBytes) / sourceBytes;
                stats[pageUrl][minifierName] = {
                    size: KB(minifiedBytes),
                    rate: formatPercentage(minifyRate),
                    rateRaw: minifyRate,
                };

                const filepath = minifierDir + '/' + pageUrlHostname + '.html';
                await fsPromise.writeFile(filepath, minifiedHtml, 'utf8');
            } catch (error) {
                console.error(`Failed to minify: ${pageUrl}`);
                console.error(error);
            }
        });

        await Promise.all(minifierPromises);
        applyMissingRateFormatting(pageUrl);
        applyBestRateFormatting(pageUrl);
        if (isComparablePage(pageUrl)) {
            comparablePageUrls.push(pageUrl);
        }

        const filepath = './build/' + pageUrlHostname + '.html';
        await fsPromise.writeFile(filepath, html, 'utf8');
    } catch (error) {
        console.error(`Failed to minify: ${pageUrl}`);
        console.error(error);
    }
});

await Promise.all(promises);

const versions = {};
for (const minifierName of minifierNames) {
    const minifierRates = comparablePageUrls.map((pageUrl) => stats[pageUrl][minifierName].rateRaw);
    if (minifierRates.length === 0) {
        rates[minifierName] = 'N/A';
    } else {
        const sumRate = minifierRates.reduce((prev, current) => prev + current, 0);
        rates[minifierName] = `${formatPercentage(sumRate / minifierRates.length)}%`;
    }
    versions[minifierName] = minifiers[minifierName].version;
}

const template = await fsPromise.readFile('./README.template.md', 'utf8');
const date = new Date().toISOString().split('T')[0];
const content = handlebars.compile(template)({ stats, rates, versions, date, comparablePageCount: comparablePageUrls.length });
await fsPromise.writeFile('./README.md', content, 'utf8');

async function fetchPage(pageUrl) {
    const maxRetries = 3;
    const maxAttempts = maxRetries + 1;
    const timeoutMs = 10_000;

    try {
        const html = await got(pageUrl, {
            timeout: { request: timeoutMs },
            retry: { limit: maxRetries },
            hooks: {
                beforeRetry: [
                    (_error, retryCount) => {
                        const attempt = retryCount;
                        console.warn(`${pageUrl} fetch failed (attempt ${attempt}/${maxAttempts}); retrying...`);
                    },
                ],
            },
        }).text();
        console.log(pageUrl + ' fetched');
        return html;
    } catch (error) {
        console.error(`${pageUrl} fetch failed after ${maxRetries} retries.`);
        console.error(error);
        return null;
    }
}

function KB(bytes) {
    return Math.round(bytes / 1024);
}

function formatPercentage(value) {
    const p = (value * 100).toFixed(1);
    return p === '-0.0' ? '0.0' : p;
}

function utf8ByteLength(value) {
    return Buffer.byteLength(value, 'utf8');
}

function normalizeHtmlOutput(value) {
    if (Buffer.isBuffer(value)) {
        return value.toString('utf8');
    }
    if (value instanceof Uint8Array) {
        return Buffer.from(value).toString('utf8');
    }
    return String(value);
}

function applyMissingRateFormatting(pageUrl) {
    const pageStats = stats[pageUrl];
    for (const minifierName of minifierNames) {
        if (!pageStats[minifierName]) {
            pageStats[minifierName] = { rateDisplay: 'N/A' };
        }
    }
}

function applyBestRateFormatting(pageUrl) {
    const pageStats = stats[pageUrl];
    const rowEntries = minifierNames.map((minifierName) => pageStats[minifierName]).filter((entry) => entry && entry.rate !== undefined);

    if (rowEntries.length === 0) {
        return;
    }

    for (const entry of rowEntries) {
        entry.rateDisplay = `${entry.rate}%`;
    }
    if (rowEntries.length !== minifierNames.length) {
        return;
    }

    const bestRate = Math.max(...rowEntries.map((entry) => Number(entry.rate)));

    for (const minifierName of minifierNames) {
        const entry = pageStats[minifierName];
        if (!entry || entry.rate === undefined) {
            continue;
        }

        const rateText = `${entry.rate}%`;
        entry.rateDisplay = Number(entry.rate) === bestRate ? `**<ins>${rateText}</ins>**` : rateText;
    }
}

function isComparablePage(pageUrl) {
    const pageStats = stats[pageUrl];
    return minifierNames.every((minifierName) => pageStats[minifierName]?.rateRaw !== undefined);
}
