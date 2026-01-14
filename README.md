# HTML Minifiers Benchmarks

Updated: 2026-01-14

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/4.17.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.0.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1

| Website                                                       | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] |
| ------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: |
| [stackoverflow.blog](https://stackoverflow.blog/)             |         141 |                   3.8% |                32.5% |       8.1% |      4.7% |          4.8% |
| [github.com](https://github.com/)                             |         551 |                   2.9% |                41.9% |      17.2% |      7.2% |          5.7% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)   |         222 |                   4.5% |                 7.6% |       7.4% |      6.1% |          2.9% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/) |         109 |                  37.9% |                42.0% |      49.1% |     40.1% |         39.9% |
| [tc39.es](https://tc39.es/ecma262/)                           |        7243 |                   8.5% |                11.8% |       9.3% |      9.5% |          9.1% |
| [apple.com](https://www.apple.com/)                           |         258 |                   8.6% |                20.5% |      11.3% |     10.1% |          9.4% |
| [w3.org](https://www.w3.org/)                                 |          50 |                  19.1% |                24.7% |      23.4% |     24.5% |         20.5% |
| [weather.com](https://weather.com)                            |        2277 |                   0.3% |                11.5% |      18.7% |     11.1% |          0.6% |
| **Avg. minify rate**                                          |             |              **10.7%** |            **24.0%** |  **18.1%** | **14.2%** |     **11.6%** |

New HTML minifiers are welcome!
Please submit a PR to add a new minifier to the benchmark, or open an issue to request it.

## Benchmark

```bash
npm install --omit=dev
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
