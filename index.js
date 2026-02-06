import url from 'url';
import fs from 'fs';
import { promises as fsPromise } from 'fs';
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
const minHtmlLength = 300;

for (const minifierName of Object.keys(minifiers)) {
    rates[minifierName] = [];
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
        if (html.length < minHtmlLength) {
            console.warn(`${pageUrl} skipped from report: content too short (${html.length} chars).`);
            return;
        }

        stats[pageUrl] = {
            url: pageUrl,
            name: pageUrlHostname,
        };
        stats[pageUrl].source = {
            size: KB(html.length),
        };

        const minifierPromises = Object.keys(minifiers).map(async (minifierName) => {
            const minifierDir = './build/' + minifierName;
            const minifier = minifiers[minifierName].default;

            try {
                const minifiedHtml = await minifier(html);
                const minifyRate = (html.length - minifiedHtml.length) / html.length;
                stats[pageUrl][minifierName] = {
                    size: KB(minifiedHtml.length),
                    rate: formatPercentage(minifyRate),
                };
                rates[minifierName].push(minifyRate);

                const filepath = minifierDir + '/' + pageUrlHostname + '.html';
                await fsPromise.writeFile(filepath, minifiedHtml);
            } catch (error) {
                console.error(`Failed to minify: ${pageUrl}`);
                console.error(error);
            }
        });

        await Promise.all(minifierPromises);

        const filepath = './build/' + pageUrlHostname + '.html';
        await fsPromise.writeFile(filepath, html);
    } catch (error) {
        console.error(`Failed to minify: ${pageUrl}`);
        console.error(error);
    }
});

await Promise.all(promises);

const versions = {};
for (const minifierName of Object.keys(rates)) {
    const minifierRates = rates[minifierName];
    const sumRate = minifierRates.reduce((prev, current) => prev + current);
    rates[minifierName] = formatPercentage(sumRate / minifierRates.length);
    versions[minifierName] = minifiers[minifierName].version;
}

const template = await fsPromise.readFile('./README.template.md', 'utf8');
const date = new Date().toISOString().split('T')[0];
const content = handlebars.compile(template)({ stats, rates, versions, date });
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
