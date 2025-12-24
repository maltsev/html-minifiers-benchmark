# HTML Minifiers Benchmarks

Updated: 2025-12-24

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/4.15.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.0.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1

| Website                                                       | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] |
| ------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: |
| [stackoverflow.blog](https://stackoverflow.blog/)             |         142 |                   3.7% |                32.5% |       7.4% |      4.5% |          4.6% |
| [github.com](https://github.com/)                             |         549 |                   2.9% |                42.2% |      17.5% |      7.3% |          5.7% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)   |         217 |                   4.6% |                 7.7% |       5.0% |      6.2% |          2.9% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/) |         109 |                  38.0% |                42.0% |      39.4% |     40.2% |         39.9% |
| [tc39.es](https://tc39.es/ecma262/)                           |        7243 |                   8.5% |                11.8% |       8.6% |      9.5% |          9.1% |
| [apple.com](https://www.apple.com/)                           |         266 |                   9.1% |                20.9% |      11.6% |     10.5% |          9.7% |
| [w3.org](https://www.w3.org/)                                 |          51 |                  19.0% |                24.5% |      23.1% |     24.4% |         20.3% |
| [weather.com](https://weather.com)                            |        2282 |                   0.3% |                11.4% |      12.2% |     11.1% |          0.6% |
| **Avg. minify rate**                                          |             |              **10.8%** |            **24.1%** |  **15.6%** | **14.2%** |     **11.6%** |

New HTML minifiers are welcome!
Please submit a PR to add a new minifier to the benchmark, or open an issue to request it.

## Benchmark

```bash
npm install --omit=dev
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
