# HTML Minifiers Benchmarks

Updated: 2026-09-30

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/8.7.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.5.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.12

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |             [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | -------------------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          64 |                   6.8% |                11.0% | **<ins>35.9%</ins>** |                10.3% |          8.0% |               11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         115 |                  39.1% |                42.9% | **<ins>50.2%</ins>** |                41.3% |         41.2% |               41.7% |
| [css-tricks.com](https://css-tricks.com/)                       |         178 |                    N/A |                15.1% | **<ins>27.6%</ins>** |                13.7% |          8.4% |               14.4% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         254 |                   4.6% |                 7.6% |  **<ins>9.6%</ins>** |                 5.9% |          6.0% |                6.3% |
| [leanpub.com](https://leanpub.com/)                             |         505 |                   1.2% |                 9.6% |                10.0% | **<ins>56.9%</ins>** |          1.7% |                5.8% |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                12.9% | **<ins>33.0%</ins>** |                12.1% |          7.9% |               12.6% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         131 |                   4.1% |                 7.0% |  **<ins>7.7%</ins>** |                 4.6% |          4.9% |                5.5% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |                 0.3% |                 0.3% |          0.2% | **<ins>1.5%</ins>** |
| [mastodon.social](https://mastodon.social/explore)              |          50 |                   3.8% |                13.3% | **<ins>13.5%</ins>** |                 5.7% |          7.0% |                8.3% |
| [home.cern](https://home.cern/)                                 |         291 |                    N/A |                13.0% | **<ins>25.6%</ins>** |                 8.1% |          4.7% |               10.2% |
| [eff.org](https://eff.org/)                                     |          55 |                   8.5% |                15.0% | **<ins>15.4%</ins>** |                13.0% |         11.0% |               12.9% |
| [apple.com](https://apple.com/)                                 |         248 |                   6.1% |  **<ins>9.5%</ins>** |                 9.2% |                 7.6% |          6.7% |                6.9% |
| [w3.org](https://w3.org/)                                       |          48 |                  18.4% | **<ins>24.0%</ins>** |                23.7% |                23.5% |         19.5% |               23.6% |
| [weather.com](https://weather.com/)                             |         357 |                   0.5% |                 8.5% |  **<ins>9.1%</ins>** |                 6.7% |          0.6% |                6.6% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         635 |                   0.8% |  **<ins>7.2%</ins>** |                 6.8% |                 4.6% |          1.2% |                6.3% |
| [un.org](https://un.org/en/)                                    |         161 |                  13.5% |                21.3% | **<ins>42.3%</ins>** |                19.1% |         14.4% |               16.8% |
| [github.com](https://github.com/)                               |         563 |                   1.5% |                15.4% | **<ins>15.5%</ins>** |                 5.2% |          4.1% |                4.6% |
| [faz.net](https://faz.net/aktuell/)                             |        1595 |                   3.4% |                10.4% | **<ins>15.9%</ins>** |                 4.6% |          3.7% |                8.6% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7448 |                   5.7% |                 8.2% |  **<ins>8.3%</ins>** |                 6.6% |          6.2% |                7.9% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         186 |                  26.9% |                31.2% | **<ins>68.5%</ins>** |                30.3% |         27.4% |               30.9% |
| **Avg. minify rate**                                            |             |               **8.2%** |            **14.2%** |            **20.8%** |            **14.3%** |      **9.5%** |           **12.1%** |

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
