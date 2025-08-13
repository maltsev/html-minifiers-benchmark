import { minify } from 'html-minifier-next';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const options = {
    removeComments: true,
    removeCommentsFromCDATA: true,
    removeCDATASectionsFromCDATA: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeRedundantAttributes: true,
    useShortDoctype: false,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeOptionalTags: false,
    removeEmptyElements: false,
};

export default async function (html) {
    return await minify(html, options);
}

export const { version } = require('../node_modules/html-minifier-next/package.json');
