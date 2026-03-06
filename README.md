# HTML Minifiers Benchmarks

Updated: 2026-03-06

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/5.1.6
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.2.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.18

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.5% | **<ins>34.5%</ins>** |     11.1% |          8.7% |               11.5% |
| [css-tricks.com](https://css-tricks.com/)                       |         176 |                   8.5% |                22.5% | **<ins>28.5%</ins>** |     13.5% |          8.6% |               13.7% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         109 |                  37.9% |                41.6% | **<ins>52.7%</ins>** |     40.1% |         40.0% |               40.5% |
| [leanpub.com](https://leanpub.com/)                             |         356 |                   1.2% |  **<ins>8.3%</ins>** |                 6.5% |      4.8% |          1.9% |                5.3% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         140 |                   3.7% |  **<ins>7.2%</ins>** |                 6.9% |      4.3% |          4.5% |                5.1% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.1% | **<ins>14.9%</ins>** |                14.7% |      5.9% |          5.2% |                7.2% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         228 |                   4.5% |  **<ins>7.3%</ins>** |                 7.2% |      6.0% |          5.9% |                6.2% |
| [edri.org](https://edri.org/)                                   |          80 |                   7.7% |                13.7% | **<ins>30.7%</ins>** |     12.3% |          8.2% |               12.8% |
| [apple.com](https://apple.com/)                                 |         264 |                   8.0% | **<ins>12.3%</ins>** |                10.5% |      9.5% |          8.8% |                9.1% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.6% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [home.cern](https://home.cern/)                                 |         151 |                  37.1% | **<ins>46.4%</ins>** |                40.2% |     38.9% |         39.4% |               40.3% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         152 |                  13.2% |                17.8% | **<ins>64.0%</ins>** |     16.9% |         13.8% |               17.5% |
| [un.org](https://un.org/en/)                                    |         150 |                  14.4% |                22.7% | **<ins>41.7%</ins>** |     20.2% |         15.3% |               17.6% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.9% | **<ins>24.4%</ins>** |                23.2% |     24.3% |         20.3% |               24.0% |
| [eff.org](https://eff.org/)                                     |          56 |                   8.4% | **<ins>14.0%</ins>** |                11.9% |     12.8% |         10.8% |               12.7% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         658 |                   0.8% |  **<ins>7.0%</ins>** |                 6.0% |      4.6% |          1.2% |                6.2% |
| [sitepoint.com](https://sitepoint.com/)                         |         233 |                   0.7% | **<ins>10.1%</ins>** |                 9.7% |      6.2% |          1.0% |                5.6% |
| [github.com](https://github.com/)                               |         549 |                   3.0% | **<ins>17.4%</ins>** |                16.6% |      7.3% |          5.8% |                6.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1366 |                   3.3% |                 5.6% | **<ins>10.7%</ins>** |      4.5% |          3.6% |                4.5% |
| [weather.com](https://weather.com/)                             |        2483 |                   0.3% |                11.2% | **<ins>16.8%</ins>** |      9.9% |          0.6% |                9.9% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7305 |                   8.5% | **<ins>11.1%</ins>** |                 9.3% |      9.5% |          9.2% |               10.9% |
| **Avg. minify rate**                                            |             |               **8.9%** |            **15.6%** |            **20.9%** | **12.5%** |     **10.1%** |           **12.8%** |

New HTML minifiers are welcome!
Please submit a PR to add a new minifier to the benchmark, or open an issue to request it.

## Benchmark

Run the benchmark locally:

```bash
npm install --omit=dev
npm start
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.

## Other benchmarks

- https://github.com/j9t/minifier-benchmarks — by [html-minifier-next](https://github.com/j9t/html-minifier-next) maintainer
