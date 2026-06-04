# HTML Minifiers Benchmarks

Updated: 2026-06-04

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/6.2.8
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.3.2
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.40

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.9% |                11.0% | **<ins>34.0%</ins>** |     10.3% |          8.1% |               11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         117 |                  38.2% |                42.0% | **<ins>52.0%</ins>** |     40.4% |         40.3% |               40.8% |
| [css-tricks.com](https://css-tricks.com/)                       |         168 |                    N/A |                16.1% |                28.7% |     14.1% |          8.5% |               14.9% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         133 |                   4.0% |  **<ins>7.6%</ins>** |                 7.3% |      4.5% |          4.7% |                5.4% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         226 |                   4.6% |  **<ins>7.4%</ins>** |  **<ins>7.4%</ins>** |      6.2% |          6.0% |                6.3% |
| [leanpub.com](https://leanpub.com/)                             |         294 |                   1.2% |  **<ins>9.5%</ins>** |                 7.4% |      5.2% |          1.8% |                5.6% |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                13.4% | **<ins>32.3%</ins>** |     12.1% |          7.8% |               12.5% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [mastodon.social](https://mastodon.social/explore)              |          39 |                   3.4% | **<ins>14.4%</ins>** |                14.2% |      5.8% |          5.9% |                7.6% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         167 |                  18.4% |                23.2% | **<ins>65.3%</ins>** |     22.3% |         19.0% |               22.9% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.9% | **<ins>24.4%</ins>** |                23.2% |     24.3% |         20.3% |               24.0% |
| [eff.org](https://eff.org/)                                     |          54 |                   8.8% | **<ins>15.8%</ins>** |                10.9% |     13.4% |         11.4% |               13.4% |
| [apple.com](https://apple.com/)                                 |         253 |                   5.8% |  **<ins>9.9%</ins>** |                 8.5% |      7.5% |          6.5% |                7.0% |
| [home.cern](https://home.cern/)                                 |         290 |                    N/A |                12.6% |                26.8% |      8.0% |          4.5% |                9.9% |
| [sitepoint.com](https://sitepoint.com/)                         |         246 |                   0.7% | **<ins>11.5%</ins>** |                11.0% |      6.2% |          1.0% |                5.4% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         711 |                   0.8% |  **<ins>7.5%</ins>** |                 5.9% |      4.7% |          1.2% |                6.7% |
| [github.com](https://github.com/)                               |         558 |                   3.1% | **<ins>17.4%</ins>** |                16.5% |      7.3% |          5.9% |                6.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1483 |                   3.2% |                10.7% | **<ins>15.7%</ins>** |      4.4% |          3.5% |                8.6% |
| [weather.com](https://weather.com/)                             |        2781 |                   0.1% |  **<ins>9.5%</ins>** |                 9.3% |      9.4% |          0.2% | **<ins>9.5%</ins>** |
| [tc39.es](https://tc39.es/ecma262/)                             |        7262 |                   5.7% |  **<ins>8.2%</ins>** |                 6.6% |      6.6% |          6.2% |                8.0% |
| [un.org](https://un.org/en/)                                    |         152 |                  14.2% |                22.6% | **<ins>41.3%</ins>** |     20.0% |         15.2% |               17.4% |
| **Avg. minify rate**                                            |             |               **7.5%** |            **14.0%** |            **19.3%** | **11.1%** |      **8.7%** |           **11.6%** |

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
