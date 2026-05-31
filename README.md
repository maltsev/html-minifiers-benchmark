# HTML Minifiers Benchmarks

Updated: 2026-05-31

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

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |             [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | -------------------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.9% |                11.0% | **<ins>34.0%</ins>** |                10.3% |          8.1% |               11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         117 |                  38.2% |                42.0% | **<ins>52.0%</ins>** |                40.4% |         40.3% |               40.8% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         225 |                   4.6% |  **<ins>7.4%</ins>** |  **<ins>7.4%</ins>** |                 6.1% |          6.0% |                6.3% |
| [leanpub.com](https://leanpub.com/)                             |         282 |                   1.2% |                10.1% |                 8.1% | **<ins>83.7%</ins>** |          1.9% |                6.1% |
| [css-tricks.com](https://css-tricks.com/)                       |         166 |                   8.3% |                16.1% | **<ins>28.5%</ins>** |                14.1% |          8.5% |               14.9% |
| [mastodon.social](https://mastodon.social/explore)              |          31 |                   2.8% | **<ins>15.3%</ins>** |                15.1% |                 5.9% |          4.6% |                6.8% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.8% | **<ins>24.3%</ins>** |                23.1% |                24.2% |         20.2% |               23.9% |
| [eff.org](https://eff.org/)                                     |          54 |                   8.7% | **<ins>15.6%</ins>** |                10.8% |                13.3% |         11.2% |               13.2% |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                13.4% | **<ins>32.3%</ins>** |                12.1% |          7.8% |               12.5% |
| [apple.com](https://apple.com/)                                 |         283 |                   5.2% |  **<ins>8.6%</ins>** |                 7.5% |                 6.7% |          5.7% |                6.3% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         167 |                  18.3% |                23.1% | **<ins>65.3%</ins>** |                22.2% |         18.9% |               22.8% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |                -2.6% |                 0.3% |          0.2% | **<ins>1.5%</ins>** |
| [un.org](https://un.org/en/)                                    |         152 |                  14.2% |                22.6% | **<ins>41.2%</ins>** |                20.0% |         15.2% |               17.4% |
| [home.cern](https://home.cern/)                                 |         286 |                    N/A |                12.6% |                25.5% |                 8.1% |          4.6% |               10.0% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         744 |                   0.7% |  **<ins>1.4%</ins>** |                 1.3% |                 0.8% |          0.8% |                1.0% |
| [sitepoint.com](https://sitepoint.com/)                         |         247 |                   0.7% | **<ins>11.4%</ins>** |                11.0% |                 6.2% |          1.0% |                5.4% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         833 |                   0.8% |  **<ins>7.4%</ins>** |                 5.8% |                 4.6% |          1.2% |                6.6% |
| [github.com](https://github.com/)                               |         557 |                   3.1% | **<ins>17.4%</ins>** |                16.5% |                 7.3% |          5.9% |                6.5% |
| [faz.net](https://faz.net/aktuell/)                             |        1477 |                   3.2% |                10.7% | **<ins>15.7%</ins>** |                 4.3% |          3.5% |                8.6% |
| [weather.com](https://weather.com/)                             |        2684 |                   0.1% |  **<ins>9.5%</ins>** |                 9.3% |                 9.3% |          0.2% |                9.4% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7232 |                   5.7% |  **<ins>8.2%</ins>** |                 6.6% |                 6.7% |          6.2% |                8.0% |
| **Avg. minify rate**                                            |             |               **7.3%** |            **13.8%** |            **19.4%** |            **14.9%** |      **8.4%** |           **11.4%** |

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
