# HTML Minifiers Benchmarks

Updated: {{date}}

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/{{versions.htmlminifierterser}}
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/{{versions.htmlminifiernext}}
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/{{versions.htmlnano}}

| Website | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |
| ------- | ----------: | ---------------------: | -------------------: | ---------: |
{{#each stats}}
| [{{ this.name }}]({{ this.url }}) | {{ this.source.size }} | {{ this.htmlminifierterser.rate }}% | {{ this.htmlminifiernext.rate }}% | {{ this.htmlnano.rate }}% |
{{/each}}
| **Avg. minify rate** | 0% | **{{ rates.htmlminifierterser }}%** | **{{ rates.htmlminifiernext }}%** | **{{ rates.htmlnano }}%** |

## Benchmark

```bash
npm install --omit=dev
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
