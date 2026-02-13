# HTML Minifiers Benchmarks

Updated: 2026-02-13

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/5.1.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.1.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.11

| Website                                                         | Source (KB) | [html-minifier-terser] |             [html-minifier-next] |                       [htmlnano] |  [minify] | [minify-html] |                      [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------------------: | -------------------------------: | --------: | ------------: | ------------------------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                            11.5% | **&lt;ins&gt;34.5%&lt;/ins&gt;** |     11.1% |          8.7% |                           11.5% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         109 |                  37.9% |                            41.6% | **&lt;ins&gt;52.6%&lt;/ins&gt;** |     40.1% |         40.0% |                           40.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         229 |                   4.4% |  **&lt;ins&gt;7.2%&lt;/ins&gt;** |                             7.1% |      6.0% |          5.9% |                            6.2% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         141 |                   3.8% |  **&lt;ins&gt;7.4%&lt;/ins&gt;** |                             7.0% |      4.5% |          4.7% |                            5.3% |
| [leanpub.com](https://leanpub.com)                              |         245 |                   1.3% |  **&lt;ins&gt;7.9%&lt;/ins&gt;** |                             6.7% |      6.4% |          1.9% |                            6.8% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                             0.7% |                            -2.6% |      0.3% |          0.2% | **&lt;ins&gt;1.5%&lt;/ins&gt;** |
| [mastodon.social](https://mastodon.social/explore)              |          38 |                   3.3% |                            12.1% | **&lt;ins&gt;14.3%&lt;/ins&gt;** |      5.8% |          5.8% |                            7.5% |
| [css-tricks.com](https://css-tricks.com)                        |         155 |                   9.2% |                            22.3% | **&lt;ins&gt;26.3%&lt;/ins&gt;** |     12.3% |          9.3% |                           12.4% |
| [home.cern](https://home.cern)                                  |         150 |                  37.2% | **&lt;ins&gt;46.5%&lt;/ins&gt;** |                            40.3% |     39.0% |         39.5% |                           40.4% |
| [edri.org](https://edri.org)                                    |          80 |                   7.7% |                            13.7% | **&lt;ins&gt;30.6%&lt;/ins&gt;** |     12.3% |          8.2% |                           12.8% |
| [apple.com](https://apple.com/)                                 |         233 |                   8.8% | **&lt;ins&gt;15.3%&lt;/ins&gt;** |                            11.6% |     10.5% |          9.7% |                           10.0% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.9% | **&lt;ins&gt;24.4%&lt;/ins&gt;** |                            23.3% |     24.3% |         20.3% |                           24.0% |
| [un.org](https://un.org/en/)                                    |         151 |                  14.3% |                            22.6% | **&lt;ins&gt;41.4%&lt;/ins&gt;** |     20.1% |         15.2% |                           17.5% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         152 |                  13.2% |                            17.8% | **&lt;ins&gt;64.0%&lt;/ins&gt;** |     16.9% |         13.9% |                           17.5% |
| [eff.org](https://eff.org)                                      |          56 |                   8.5% | **&lt;ins&gt;14.1%&lt;/ins&gt;** |                            10.4% |     12.9% |         10.9% |                           12.8% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         708 |                   0.8% |  **&lt;ins&gt;6.8%&lt;/ins&gt;** |                             6.0% |      4.7% |          1.2% |                            6.0% |
| [github.com](https://github.com/)                               |         546 |                   3.0% | **&lt;ins&gt;17.4%&lt;/ins&gt;** |                            16.7% |      7.3% |          5.8% |                            6.3% |
| [sitepoint.com](https://sitepoint.com)                          |         481 |                   0.8% | **&lt;ins&gt;12.7%&lt;/ins&gt;** |                            12.3% |      6.1% |          1.0% |                            5.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1582 |                   3.4% |                            12.7% | **&lt;ins&gt;15.9%&lt;/ins&gt;** |      4.8% |          3.8% |                            4.8% |
| [weather.com](https://weather.com)                              |        2419 |                   0.3% |                            11.3% | **&lt;ins&gt;17.0%&lt;/ins&gt;** |      9.9% |          0.6% |                           10.0% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7306 |                   8.5% | **&lt;ins&gt;11.1%&lt;/ins&gt;** |                             9.3% |      9.5% |          9.2% |                           10.9% |
| **Avg. minify rate**                                            |             |               **9.0%** |                        **16.1%** |                        **21.2%** | **12.6%** |     **10.3%** |                       **12.9%** |

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
