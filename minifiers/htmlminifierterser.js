import htmlMinifierTerser from 'html-minifier-terser';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const options = {
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: false,
    collapseInlineTagWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeOptionalTags: true,
    removeEmptyElements: true,
    decodeEntities: true,
    ignoreCustomComments: [],
    processConditionalComments: true,
    processScripts: ['text/html', 'application/ld+json'],
    minifyCSS: { level: 2 },
    minifyJS: { format: { comments: false } },
    sortAttributes: true,
    sortClassName: true,
};

export default async function (html, documentUrl) {
    return htmlMinifierTerser.minify(html, { ...options, minifyURLs: documentUrl || true });
}

export const { version } = require('../node_modules/html-minifier-terser/package.json');
