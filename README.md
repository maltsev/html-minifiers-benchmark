# HTML Minifiers Benchmarks

Updated: 2026-02-20

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/5.1.1
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.1.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.11

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.5% | **<ins>34.5%</ins>** |     11.1% |          8.7% |               11.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         231 |                   4.4% |  **<ins>7.2%</ins>** |                 7.1% |      6.0% |          5.8% |                6.2% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         108 |                  37.9% |                41.7% | **<ins>52.8%</ins>** |     40.1% |         40.0% |               40.6% |
| [css-tricks.com](https://css-tricks.com)                        |         156 |                   9.2% |                22.3% | **<ins>26.2%</ins>** |     12.4% |          9.3% |               12.5% |
| [leanpub.com](https://leanpub.com)                              |         354 |                   1.2% |  **<ins>8.2%</ins>** |                 6.4% |      4.7% |          1.9% |                5.1% |
| [edri.org](https://edri.org)                                    |          80 |                   7.7% |                13.7% | **<ins>30.7%</ins>** |     12.3% |          8.2% |               12.8% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         142 |                   3.8% |  **<ins>7.3%</ins>** |                 6.9% |      4.4% |          4.6% |                5.2% |
| [mastodon.social](https://mastodon.social/explore)              |          38 |                   3.3% |                12.0% | **<ins>14.3%</ins>** |      5.8% |          5.8% |                7.6% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         152 |                  13.2% |                17.8% | **<ins>64.1%</ins>** |     16.9% |         13.8% |               17.5% |
| [home.cern](https://home.cern)                                  |         151 |                  37.1% | **<ins>46.4%</ins>** |                40.2% |     38.9% |         39.4% |               40.3% |
| [apple.com](https://apple.com/)                                 |         224 |                   8.8% | **<ins>13.6%</ins>** |                11.7% |     10.5% |          9.7% |               10.0% |
| [un.org](https://un.org/en/)                                    |         151 |                  14.3% |                22.5% | **<ins>41.3%</ins>** |     20.0% |         15.2% |               17.5% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.8% | **<ins>24.3%</ins>** |                23.2% |     24.2% |         20.2% |               23.9% |
| [eff.org](https://eff.org)                                      |          55 |                   8.5% | **<ins>14.1%</ins>** |                10.5% |     12.9% |         10.9% |               12.9% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         557 |                   0.8% |  **<ins>6.8%</ins>** |                 6.0% |      4.5% |          1.2% |                6.0% |
| [github.com](https://github.com/)                               |         546 |                   3.0% | **<ins>17.4%</ins>** |                16.7% |      7.3% |          5.8% |                6.3% |
| [weather.com](https://weather.com)                              |        1076 |                   0.2% |  **<ins>8.4%</ins>** |                 7.8% |      7.9% |          0.6% |                8.3% |
| [sitepoint.com](https://sitepoint.com)                          |         481 |                   0.8% | **<ins>12.7%</ins>** |                12.3% |      6.1% |          1.0% |                5.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1572 |                   3.4% |                12.5% | **<ins>15.8%</ins>** |      4.8% |          3.7% |                4.8% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7308 |                   8.5% | **<ins>11.1%</ins>** |                 9.3% |      9.4% |          9.2% |               10.9% |
| **Avg. minify rate**                                            |             |               **9.0%** |            **15.8%** |            **20.7%** | **12.4%** |     **10.3%** |           **12.7%** |

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

## Other benchmarks

- https://github.com/j9t/minifier-benchmarks — by [html-minifier-next](https://github.com/j9t/html-minifier-next) maintainer
