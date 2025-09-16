# HTML Minifiers Benchmarks

Updated: 2025-09-16

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/2.1.3
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/2.1.4
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.3
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.16.4

| Website                                                     | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] | [minify] | [minify-html] |
| ----------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | -------: | ------------: |
| [stackoverflow.blog](https://stackoverflow.blog/)           |         166 |                   3.2% |                 3.2% |       8.3% |     4.5% |          4.0% |
| [github.com](https://github.com/)                           |         546 |                   3.8% |                 3.8% |      18.2% |     8.0% |          6.4% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page) |         219 |                   4.6% |                 4.6% |       5.0% |     6.2% |          2.9% |
| [npmjs.com](https://www.npmjs.com/package/eslint)           |         460 |                   0.5% |                 0.5% |       0.9% |     3.6% |          0.7% |
| [tc39.es](https://tc39.es/ecma262/)                         |        7198 |                   8.5% |                 8.5% |       8.7% |     9.5% |          9.1% |
| [apple.com](https://www.apple.com/)                         |         210 |                   6.8% |                 6.8% |      10.7% |     9.5% |          7.2% |
| [w3.org](https://www.w3.org/)                               |          48 |                  19.0% |                19.0% |      23.2% |    24.2% |         20.1% |
| [weather.com](https://weather.com)                          |        1845 |                   0.3% |                 0.3% |      11.9% |    11.7% |          0.7% |
| **Avg. minify rate**                                        |             |               **5.9%** |             **5.9%** |  **10.8%** | **9.7%** |      **6.4%** |

New HTML minifiers are welcome!
Please submit a PR to add a new minifier to the benchmark, or open an issue to request it.

## Benchmark

```bash
npm install --omit=dev
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
