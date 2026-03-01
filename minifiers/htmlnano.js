import htmlnano, { presets } from 'htmlnano';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default async function (html) {
    const result = await htmlnano.process(html, presets.max);
    return result.html;
}

export const { version } = require('../node_modules/htmlnano/package.json');
