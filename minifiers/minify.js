import { string } from '@tdewolff/minify';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default function (html) {
    return string('text/html', html);
}

export const { version } = require('../node_modules/@tdewolff/minify/package.json');
