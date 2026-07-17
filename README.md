# HTML Minifiers Benchmarks

Updated: 2026-07-17

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/7.2.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.4.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.43

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.9% |                11.1% | **<ins>34.4%</ins>** |     10.4% |          8.1% |               11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         119 |                  39.1% |                42.9% | **<ins>52.8%</ins>** |     41.3% |         41.2% |               41.7% |
| [css-tricks.com](https://css-tricks.com/)                       |         150 |                    N/A |                15.0% |                26.1% |     12.9% |          9.2% |               13.7% |
| [leanpub.com](https://leanpub.com/)                             |         344 |                   1.2% |  **<ins>8.3%</ins>** |                 6.5% |      4.5% |          1.8% |                5.1% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         250 |                   4.7% |  **<ins>7.6%</ins>** |                 7.2% |      6.0% |          6.0% |                6.2% |
| [mastodon.social](https://mastodon.social/explore)              |          43 |                   3.6% | **<ins>14.0%</ins>** |                13.9% |      5.8% |          6.3% |                7.9% |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                12.9% | **<ins>32.3%</ins>** |     12.2% |          7.9% |               12.6% |
| [apple.com](https://apple.com/)                                 |         244 |                   5.9% |  **<ins>9.7%</ins>** |                 8.7% |      7.6% |          6.6% |                7.0% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         129 |                   4.0% |  **<ins>7.0%</ins>** |                 6.7% |      4.5% |          4.9% |                5.5% |
| [home.cern](https://home.cern/)                                 |         301 |                    N/A |                12.5% |                26.1% |      7.8% |          4.5% |                9.9% |
| [weather.com](https://weather.com/)                             |         329 |                   0.5% |  **<ins>8.1%</ins>** |                 6.4% |      6.4% |          0.6% |                6.7% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [w3.org](https://w3.org/)                                       |          52 |                  18.6% | **<ins>24.0%</ins>** |                22.8% |     23.9% |         20.0% |               23.6% |
| [un.org](https://un.org/en/)                                    |         154 |                    N/A |                22.1% |                41.0% |     19.8% |         15.1% |               17.3% |
| [eff.org](https://eff.org/)                                     |          53 |                   8.8% | **<ins>15.5%</ins>** |                11.0% |     13.4% |         11.4% |               13.4% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         175 |                  19.9% |                24.5% | **<ins>64.5%</ins>** |     23.6% |         20.5% |               24.1% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         746 |                   0.8% |  **<ins>7.3%</ins>** |                 5.9% |      4.8% |          1.2% |                6.5% |
| [sitepoint.com](https://sitepoint.com/)                         |         234 |                   0.7% |  **<ins>9.9%</ins>** |                 9.6% |      6.1% |          0.9% |                5.5% |
| [github.com](https://github.com/)                               |         563 |                   2.2% | **<ins>16.1%</ins>** |                15.3% |      6.1% |          4.7% |                5.3% |
| [faz.net](https://faz.net/aktuell/)                             |        1594 |                   3.2% |                10.8% | **<ins>15.1%</ins>** |      4.4% |          3.5% |                8.6% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7421 |                   5.7% |  **<ins>8.2%</ins>** |                 6.6% |      6.7% |          6.2% |                8.0% |
| **Avg. minify rate**                                            |             |               **7.2%** |            **13.2%** |            **17.6%** | **10.4%** |      **8.4%** |           **11.1%** |

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
