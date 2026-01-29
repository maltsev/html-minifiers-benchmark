# HTML Minifiers Benchmarks

Updated: 2026-01-29

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/4.19.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.0.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1

| Website                                                       | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] |
| ------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: |
| [stackoverflow.blog](https://stackoverflow.blog/)             |         140 |                   3.8% |                32.6% |       8.1% |      4.6% |          4.7% |
| [github.com](https://github.com/)                             |         545 |                   3.0% |                42.2% |      17.3% |      7.3% |          5.7% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)   |         218 |                   4.6% |                 7.7% |       7.5% |      6.2% |          2.9% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/) |         109 |                  37.9% |                42.1% |      49.1% |     40.1% |         39.9% |
| [tc39.es](https://tc39.es/ecma262/)                           |        7254 |                   8.5% |                11.8% |       9.3% |      9.5% |          9.1% |
| [apple.com](https://www.apple.com/)                           |         260 |                   8.3% |                22.4% |      11.1% |      9.9% |          9.1% |
| [w3.org](https://www.w3.org/)                                 |          51 |                  18.9% |                24.5% |      23.2% |     24.3% |         20.2% |
| [weather.com](https://weather.com)                            |        2376 |                   0.3% |                11.6% |      18.3% |     11.0% |          0.6% |
| **Avg. minify rate**                                          |             |              **10.7%** |            **24.4%** |  **18.0%** | **14.1%** |     **11.5%** |

New HTML minifiers are welcome!
Please submit a PR to add a new minifier to the benchmark, or open an issue to request it.

## Benchmark

```bash
npm install --omit=dev
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
