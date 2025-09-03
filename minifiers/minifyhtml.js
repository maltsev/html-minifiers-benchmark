import { Buffer } from 'node:buffer';
import minifyHtml from '@minify-html/node';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default function (html) {
    return minifyHtml.minify(Buffer.from(html), {});
}

export const { version } = require('../node_modules/@minify-html/node/package.json');
