# HTML Minifiers Benchmarks

Updated: 2026-02-13

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/5.0.6
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.1.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.11

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.5% |  **34.5%** |     11.1% |          8.7% |      11.5% |
| [css-tricks.com](https://css-tricks.com)                        |          11 |                   8.2% |                34.7% |  **37.1%** |     18.6% |          8.4% |      24.6% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         109 |                  37.9% |                41.6% |  **52.6%** |     40.1% |         40.0% |      40.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         229 |                   4.4% |             **7.2%** |       7.1% |      6.0% |          5.9% |       6.2% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         141 |                   3.8% |                 5.6% |   **7.0%** |      4.5% |          4.7% |       5.3% |
| [leanpub.com](https://leanpub.com)                              |         245 |                   1.3% |                 7.3% |       6.7% | **83.5%** |          1.9% |       6.8% |
| [edri.org](https://edri.org)                                    |          80 |                   7.7% |                12.3% |  **30.6%** |     12.3% |          8.2% |      12.8% |
| [home.cern](https://home.cern)                                  |         150 |                  37.2% |            **46.5%** |      40.3% |     39.0% |         39.5% |      40.4% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         152 |                  13.2% |                17.8% |  **64.0%** |     16.9% |         13.9% |      17.5% |
| [eff.org](https://eff.org)                                      |          56 |                   8.5% |            **14.1%** |      10.4% |     12.9% |         10.9% |      12.8% |
| [apple.com](https://apple.com/)                                 |         233 |                   8.8% |            **14.2%** |      11.6% |     10.5% |          9.7% |      10.0% |
| [mastodon.social](https://mastodon.social/explore)              |          38 |                   3.3% |                 6.6% |  **14.3%** |      5.8% |          5.8% |       7.5% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.9% |            **24.4%** |      23.3% |     24.3% |         20.3% |      24.0% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         628 |                   0.8% |             **6.4%** |       6.0% |      4.6% |          1.2% |       6.0% |
| [un.org](https://un.org/en/)                                    |         151 |                  14.3% |                22.6% |  **41.4%** |     20.1% |         15.2% |      17.5% |
| [sitepoint.com](https://sitepoint.com)                          |         493 |                   0.8% |                 7.4% |  **12.9%** |      6.1% |          0.9% |       5.4% |
| [github.com](https://github.com/)                               |         546 |                   3.0% |                 9.7% |  **16.7%** |      7.3% |          5.8% |       6.3% |
| [faz.net](https://faz.net/aktuell/)                             |        1527 |                   3.4% |                 7.9% |  **15.9%** |      4.8% |          3.8% |       4.8% |
| [weather.com](https://weather.com)                              |        2416 |                   0.3% |                10.4% |  **17.1%** |      9.9% |          0.6% |      10.0% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7306 |                   8.5% |            **11.1%** |       9.3% |      9.5% |          9.2% |      10.9% |
| **Avg. minify rate**                                            |             |               **9.0%** |            **15.2%** |  **21.7%** | **16.6%** |     **10.2%** |  **13.4%** |

New HTML minifiers are welcome!
Please submit a PR to add a new minifier to the benchmark, or open an issue to request it.

## Benchmark

Run the benchmark locally:

```bash
npm install --omit=dev
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
