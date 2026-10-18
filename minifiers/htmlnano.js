import htmlnano, { presets } from 'htmlnano';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default async function (html, documentUrl) {
    const result = await htmlnano.process(html, { ...presets.max, minifyUrls: documentUrl || false, skipConfigLoading: true });
    return result.html;
}

export const { version } = require('../node_modules/htmlnano/package.json');
