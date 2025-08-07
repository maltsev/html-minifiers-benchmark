import htmlnano from 'htmlnano';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const safePreset = htmlnano.presets.safePreset;

export default async function (html) {
    const result = await htmlnano.process(
        html,
        {
            collapseWhitespace: 'aggressive',
            removeAttributeQuotes: true,
            removeRedundantAttributes: true,
        },
        safePreset
    );
    return result.html;
}

export const { version } = require('../node_modules/htmlnano/package.json');
