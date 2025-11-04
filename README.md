# HTML Minifiers Benchmarks

Updated: 2025-11-04

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/3.2.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/2.1.5
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.5
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1

| Website                                                     | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] | [minify] | [minify-html] |
| ----------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | -------: | ------------: |
| [stackoverflow.blog](https://stackoverflow.blog/)           |         161 |                   3.4% |                 3.4% |       8.5% |     4.6% |          4.2% |
| [github.com](https://github.com/)                           |         551 |                   3.8% |                 3.8% |      18.1% |     8.0% |          6.4% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page) |         222 |                   4.6% |                 4.6% |       4.9% |     6.2% |          2.9% |
| [npmjs.com](https://www.npmjs.com/package/eslint)           |           9 |                   0.3% |                 0.3% |       1.3% |     2.7% |          0.6% |
| [tc39.es](https://tc39.es/ecma262/)                         |        7226 |                   8.5% |                 8.5% |       8.7% |     9.5% |          9.2% |
| [apple.com](https://www.apple.com/)                         |         153 |                   9.2% |                 9.2% |      12.7% |    10.9% |          9.9% |
| [w3.org](https://www.w3.org/)                               |          50 |                  19.1% |                19.1% |      23.2% |    24.4% |         20.4% |
| [weather.com](https://weather.com)                          |        1897 |                   0.3% |                 0.3% |      12.9% |    11.5% |          0.7% |
| **Avg. minify rate**                                        |             |               **6.1%** |             **6.2%** |  **11.3%** | **9.7%** |      **6.8%** |

New HTML minifiers are welcome!
Please submit a PR to add a new minifier to the benchmark, or open an issue to request it.

## Benchmark

```bash
npm install --omit=dev
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
