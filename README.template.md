# HTML Minifiers Benchmarks

Updated: {{date}}

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/{{versions.htmlminifierterser}}
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/{{versions.htmlminifiernext}}
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/{{versions.htmlnano}}
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/{{versions.minify}}
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/{{versions.minifyhtml}}
[swc-html]: https://www.npmjs.com/package/@swc/html/v/{{versions.swchtml}}

| Website | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] | [minify] | [minify-html] | [swc-html] |
| ------- | ----------: | ---------------------: | -------------------: | ---------: | -------: | ------------: | ---------: |
{{#each stats}}
| [{{ this.name }}]({{ this.url }}) | {{ this.source.size }} | {{ this.htmlminifierterser.rateDisplay }} | {{ this.htmlminifiernext.rateDisplay }} | {{ this.htmlnano.rateDisplay }} | {{ this.minify.rateDisplay }} | {{ this.minifyhtml.rateDisplay }} | {{ this.swchtml.rateDisplay }} |
{{/each}}
| **Avg. minify rate** | | **{{ rates.htmlminifierterser }}%** | **{{ rates.htmlminifiernext }}%** | **{{ rates.htmlnano }}%** | **{{ rates.minify }}%** | **{{ rates.minifyhtml }}%** | **{{ rates.swchtml }}%** |

New HTML minifiers are welcome!
Please submit a PR to add a new minifier to the benchmark, or open an issue to request it.

## Benchmark

```bash
npm install --omit=dev
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
