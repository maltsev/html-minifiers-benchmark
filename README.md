# HTML Minifiers Benchmarks

Updated: 2026-03-01

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/5.1.5
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.1.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.18

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.5% | **<ins>34.5%</ins>** |     11.1% |          8.7% |               11.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         227 |                   4.4% |  **<ins>7.3%</ins>** |                 7.2% |      6.0% |          5.9% |                6.2% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         109 |                  37.9% |                41.6% | **<ins>52.6%</ins>** |     40.1% |         40.0% |               40.5% |
| [css-tricks.com](https://css-tricks.com)                        |         153 |                   8.9% |                22.1% | **<ins>26.1%</ins>** |     12.0% |          9.0% |               12.1% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         141 |                   3.7% |  **<ins>7.2%</ins>** |                 6.8% |      4.3% |          4.5% |                5.1% |
| [edri.org](https://edri.org)                                    |          80 |                   7.7% |                13.7% | **<ins>30.7%</ins>** |     12.3% |          8.2% |               12.8% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.6% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [home.cern](https://home.cern)                                  |         151 |                  37.1% | **<ins>46.4%</ins>** |                40.2% |     38.9% |         39.5% |               40.3% |
| [leanpub.com](https://leanpub.com)                              |         349 |                   1.2% |  **<ins>8.3%</ins>** |                 6.6% |      4.8% |          1.9% |                5.2% |
| [un.org](https://un.org/en/)                                    |         150 |                  14.3% |                22.7% | **<ins>41.6%</ins>** |     20.1% |         15.2% |               17.5% |
| [mastodon.social](https://mastodon.social/explore)              |          39 |                   3.3% |                12.0% | **<ins>14.3%</ins>** |      5.8% |          5.9% |                7.6% |
| [apple.com](https://apple.com/)                                 |         225 |                   8.6% | **<ins>13.4%</ins>** |                11.5% |     10.3% |          9.5% |                9.8% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.9% | **<ins>24.3%</ins>** |                23.2% |     24.2% |         20.2% |               23.9% |
| [eff.org](https://eff.org)                                      |          56 |                   8.3% | **<ins>13.9%</ins>** |                11.7% |     12.7% |         10.7% |               12.6% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         152 |                  13.2% |                17.8% | **<ins>64.1%</ins>** |     16.9% |         13.8% |               17.5% |
| [sitepoint.com](https://sitepoint.com)                          |         233 |                   0.7% | **<ins>10.1%</ins>** |                 9.7% |      6.2% |          1.0% |                5.6% |
| [github.com](https://github.com/)                               |         548 |                   3.0% | **<ins>17.3%</ins>** |                16.6% |      7.3% |          5.8% |                6.3% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         752 |                   0.8% |  **<ins>6.8%</ins>** |                 5.9% |      4.7% |          1.3% |                6.1% |
| [faz.net](https://faz.net/aktuell/)                             |        1387 |                   3.3% |                 5.5% | **<ins>10.5%</ins>** |      4.5% |          3.6% |                4.5% |
| [weather.com](https://weather.com)                              |        2473 |                   0.3% |                11.2% | **<ins>16.8%</ins>** |      9.9% |          0.6% |                9.9% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7308 |                   8.5% | **<ins>11.1%</ins>** |                 9.3% |      9.4% |          9.2% |               10.9% |
| **Avg. minify rate**                                            |             |               **8.9%** |            **15.5%** |            **20.8%** | **12.5%** |     **10.2%** |           **12.7%** |

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
