# HTML Minifiers Benchmark

Updated: {{date}}

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/{{versions.htmlminifierterser}}
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/{{versions.htmlnano}}

| Website | Source (KB) | [html-minifier-terser] | [htmlnano] |
| ------- | ----------: | ---------------------: | ---------: |
{{#each stats}}
| [{{ this.name }}]({{ this.url }}) | {{ this.source.size }} | {{ this.htmlminifierterser.size }} | {{ this.htmlnano.size }} |
{{/each}}
| **Avg. minify rate** | 0% | **{{ rates.htmlminifierterser }}%** | **{{ rates.htmlnano }}%** |

## Benchmark

```bash
npm install --omit=dev
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
