# HTML Minifiers Benchmarks

Updated: 2025-10-17

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/3.0.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/2.1.5
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.4
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.16.4

| Website                                                     | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] | [minify] | [minify-html] |
| ----------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | -------: | ------------: |
| [stackoverflow.blog](https://stackoverflow.blog/)           |         164 |                   3.2% |                 3.2% |       8.3% |     4.5% |          3.9% |
| [github.com](https://github.com/)                           |         547 |                   3.8% |                 3.8% |      18.2% |     8.1% |          6.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page) |         225 |                   4.5% |                 4.5% |       4.9% |     6.1% |          2.9% |
| [npmjs.com](https://www.npmjs.com/package/eslint)           |           9 |                   0.3% |                 0.3% |       1.3% |     2.7% |          0.6% |
| [tc39.es](https://tc39.es/ecma262/)                         |        7226 |                   8.5% |                 8.5% |       8.7% |     9.5% |          9.2% |
| [apple.com](https://www.apple.com/)                         |         184 |                   7.9% |                 7.9% |      12.4% |    10.9% |          8.4% |
| [w3.org](https://www.w3.org/)                               |          50 |                  19.1% |                19.1% |      23.2% |    24.5% |         20.4% |
| [weather.com](https://weather.com)                          |        1883 |                   0.3% |                 0.3% |      13.0% |    11.6% |          0.7% |
| **Avg. minify rate**                                        |             |               **6.0%** |             **6.0%** |  **11.2%** | **9.7%** |      **6.6%** |

New HTML minifiers are welcome!
Please submit a PR to add a new minifier to the benchmark, or open an issue to request it.

## Benchmark

```bash
npm install --omit=dev
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
