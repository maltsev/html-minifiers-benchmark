import swcHtml from '@swc/html';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const options = {
    minify_js: true,
    minify_css: true,
    collapseWhitespaces: 'all',
    remove_comments: true,
    remove_empty_attributes: true,
    remove_redundant_attributes: true,
    collapse_boolean_attributes: true,
    normalize_attributes: true,
    remove_empty_metadata_elements: true,
    minify_conditional_comments: true,
};

export default async function (html) {
    const result = await swcHtml.minify(html, options);
    return result.code;
}

export const { version } = require('../node_modules/@swc/html/package.json');
