# HTML Minifiers Benchmarks

Updated: 2026-05-26

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/6.2.7
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.3.2
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.40

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.7% |                10.8% | **<ins>33.9%</ins>** |     10.1% |          7.9% |               10.8% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         132 |                   4.0% |  **<ins>7.6%</ins>** |                 7.4% |      4.5% |          4.7% |                5.4% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         225 |                   4.6% |  **<ins>7.4%</ins>** |  **<ins>7.4%</ins>** |      6.1% |          6.0% |                6.3% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         117 |                  38.3% |                42.1% | **<ins>51.7%</ins>** |     40.5% |         40.4% |               40.9% |
| [leanpub.com](https://leanpub.com/)                             |         274 |                   1.3% |  **<ins>9.7%</ins>** |                 7.6% |      5.2% |          1.9% |                5.6% |
| [mastodon.social](https://mastodon.social/explore)              |          29 |                   2.6% | **<ins>15.5%</ins>** |                15.4% |      5.9% |          4.2% |                6.5% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [w3.org](https://w3.org/)                                       |          51 |                  18.8% | **<ins>24.3%</ins>** |                23.1% |     24.1% |         20.1% |               23.9% |
| [un.org](https://un.org/en/)                                    |         151 |                  14.3% |                22.7% | **<ins>41.5%</ins>** |     20.1% |         15.2% |               17.5% |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                13.4% | **<ins>32.3%</ins>** |     12.1% |          7.8% |               12.5% |
| [apple.com](https://apple.com/)                                 |         282 |                   5.3% |  **<ins>8.6%</ins>** |                 7.5% |      6.7% |          5.7% |                6.3% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         165 |                  18.2% |                23.0% | **<ins>65.6%</ins>** |     22.1% |         18.8% |               22.7% |
| [home.cern](https://home.cern/)                                 |         286 |                    N/A |                12.6% |                25.6% |      8.1% |          4.6% |               10.0% |
| [css-tricks.com](https://css-tricks.com/)                       |         167 |                   8.7% |                16.6% | **<ins>28.6%</ins>** |     14.6% |          8.8% |               15.4% |
| [eff.org](https://eff.org/)                                     |          54 |                   8.9% | **<ins>15.9%</ins>** |                11.0% |     13.5% |         11.5% |               13.4% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         670 |                   0.8% |  **<ins>7.5%</ins>** |                 5.8% |      4.5% |          1.3% |                6.6% |
| [sitepoint.com](https://sitepoint.com/)                         |         247 |                   0.7% | **<ins>11.4%</ins>** |                11.0% |      6.2% |          1.0% |                5.4% |
| [github.com](https://github.com/)                               |         557 |                   3.1% | **<ins>17.4%</ins>** |                16.5% |      7.3% |          5.9% |                6.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1473 |                   3.2% |                10.7% | **<ins>15.6%</ins>** |      4.4% |          3.5% |                8.6% |
| [weather.com](https://weather.com/)                             |        2582 |                   0.1% |  **<ins>9.3%</ins>** |                 9.1% |      9.2% |          0.2% | **<ins>9.3%</ins>** |
| [tc39.es](https://tc39.es/ecma262/)                             |        7232 |                   5.7% |  **<ins>8.2%</ins>** |                 6.6% |      6.7% |          6.2% |                8.0% |
| **Avg. minify rate**                                            |             |               **7.4%** |            **14.1%** |            **19.8%** | **11.2%** |      **8.6%** |           **11.6%** |

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
