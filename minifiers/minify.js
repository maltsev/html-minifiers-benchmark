import { minify } from '@tdewolff/minify';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default async function (html) {
    return await minify({ data: html, type: 'text/html' });
}

export const { version } = require('../node_modules/@tdewolff/minify/package.json');
