# HTML Minifiers Benchmarks

Updated: 2026-02-07

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/5.0.3
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.1.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.11

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.5% |  **34.5%** |     11.1% |          8.7% |      11.5% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         109 |                  37.9% |                41.6% |  **52.6%** |     40.1% |         40.0% |      40.5% |
| [css-tricks.com](https://css-tricks.com)                        |          11 |                   8.2% |                34.7% |  **37.0%** |     18.6% |          8.4% |      24.6% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         225 |                   4.5% |             **7.3%** |       7.2% |      6.1% |          5.9% |       6.2% |
| [mastodon.social](https://mastodon.social/explore)              |          38 |                   3.3% |                 6.6% |  **14.3%** |      5.8% |          5.8% |       7.5% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         140 |                   3.9% |                 5.7% |   **7.0%** |      4.5% |          4.7% |       5.3% |
| [leanpub.com](https://leanpub.com)                              |         245 |                   1.3% |             **6.8%** |       6.2% |      5.9% |          1.9% |       6.4% |
| [apple.com](https://apple.com/)                                 |         229 |                   8.9% |            **12.4%** |      11.5% |     10.4% |          9.5% |       9.9% |
| [edri.org](https://edri.org)                                    |          80 |                   7.7% |                12.3% |  **30.6%** |     12.3% |          8.2% |      12.8% |
| [home.cern](https://home.cern)                                  |         151 |                  37.1% |            **46.4%** |      40.2% |     38.9% |         39.5% |      40.3% |
| [eff.org](https://eff.org)                                      |          55 |                   8.5% |            **14.2%** |      10.5% |     13.0% |         11.0% |      12.9% |
| [un.org](https://un.org/en/)                                    |         152 |                  14.2% |                22.4% |  **41.1%** |     19.9% |         15.1% |      17.4% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |      -2.6% |      0.3% |          0.2% |   **1.5%** |
| [w3.org](https://w3.org/)                                       |          50 |                  19.0% |            **24.5%** |      23.3% |     24.4% |         20.4% |      24.1% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         152 |                  13.2% |                17.8% |  **64.0%** |     16.9% |         13.9% |      17.6% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         712 |                   0.8% |             **6.2%** |       5.8% |      4.6% |          1.2% |       5.9% |
| [sitepoint.com](https://sitepoint.com)                          |         497 |                   0.8% |                 7.4% |  **12.9%** |      6.1% |          0.9% |       5.4% |
| [github.com](https://github.com/)                               |         546 |                   3.0% |                 9.7% |  **16.7%** |      7.3% |          5.8% |       6.3% |
| [faz.net](https://faz.net/aktuell/)                             |        1552 |                   3.4% |                 8.0% |  **15.8%** |      4.8% |          3.8% |       4.8% |
| [weather.com](https://weather.com)                              |        2398 |                   0.3% |                10.4% |  **17.1%** |      9.9% |          0.6% |      10.0% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7261 |                   8.5% |            **11.2%** |       9.3% |      9.5% |          9.2% |      11.0% |
| **Avg. minify rate**                                            |             |               **9.0%** |            **15.1%** |  **21.7%** | **12.9%** |     **10.2%** |  **13.4%** |

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
