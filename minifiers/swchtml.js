import swcHtml from '@swc/html';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const options = {
    minifyJs: true,
    minifyCss: true,
    minifyJson: true,
    forceSetHtml5Doctype: true,
    collapseWhitespaces: 'smart',
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: 'all',
    collapseBooleanAttributes: true,
    normalizeAttributes: true,
    removeEmptyMetadataElements: true,
    minifyConditionalComments: true,
    tagOmission: true,
    quotes: false,
    sortAttributes: true,
    sortSpaceSeparatedAttributeValues: true,
};

export default async function (html) {
    const result = await swcHtml.minify(html, options);
    return result.code;
}

export const { version } = require('../node_modules/@swc/html/package.json');
