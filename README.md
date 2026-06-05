# HTML Minifiers Benchmarks

Updated: 2026-06-05

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
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         117 |                  38.1% |                41.9% | **<ins>51.9%</ins>** |     40.3% |         40.2% |               40.7% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         228 |                   4.6% |  **<ins>7.4%</ins>** |                 7.3% |      6.1% |          6.0% |                6.3% |
| [css-tricks.com](https://css-tricks.com/)                       |         168 |                    N/A |                16.1% |                28.7% |     14.1% |          8.5% |               14.9% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         133 |                   4.0% |  **<ins>7.6%</ins>** |                 7.3% |      4.5% |          4.7% |                5.4% |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                13.4% | **<ins>32.3%</ins>** |     12.1% |          7.8% |               12.5% |
| [mastodon.social](https://mastodon.social/explore)              |          40 |                   3.4% | **<ins>14.3%</ins>** |                14.2% |      5.8% |          6.0% |                7.7% |
| [w3.org](https://w3.org/)                                       |          50 |                  18.9% | **<ins>24.5%</ins>** |                23.3% |     24.4% |         20.3% |               24.1% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [eff.org](https://eff.org/)                                     |          54 |                   8.8% | **<ins>15.6%</ins>** |                10.9% |     13.4% |         11.3% |               13.3% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         169 |                  19.0% |                23.7% | **<ins>65.2%</ins>** |     22.8% |         19.6% |               23.4% |
| [home.cern](https://home.cern/)                                 |         290 |                    N/A |                12.6% |                26.8% |      8.0% |          4.5% |                9.9% |
| [apple.com](https://apple.com/)                                 |         253 |                   5.8% |  **<ins>9.9%</ins>** |                 8.5% |      7.5% |          6.5% |                7.0% |
| [sitepoint.com](https://sitepoint.com/)                         |         259 |                   0.7% | **<ins>11.1%</ins>** |                10.6% |      6.1% |          0.9% |                5.3% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         741 |                   0.8% |  **<ins>7.4%</ins>** |                 5.9% |      4.7% |          1.2% |                6.6% |
| [github.com](https://github.com/)                               |         558 |                   3.1% | **<ins>17.4%</ins>** |                16.5% |      7.3% |          5.9% |                6.4% |
| [weather.com](https://weather.com/)                             |        2298 |                   0.1% |  **<ins>9.6%</ins>** |                 9.4% |      9.5% |          0.1% |                9.5% |
| [faz.net](https://faz.net/aktuell/)                             |        1514 |                   3.2% |                10.7% | **<ins>15.5%</ins>** |      4.3% |          3.5% |                8.6% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7262 |                   5.7% |  **<ins>8.2%</ins>** |                 6.6% |      6.6% |          6.2% |                8.0% |
| **Avg. minify rate**                                            |             |               **7.4%** |            **13.8%** |            **18.6%** | **10.9%** |      **8.7%** |           **11.6%** |

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
