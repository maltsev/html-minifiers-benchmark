# HTML Minifiers Benchmarks

Updated: 2026-10-03

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/8.10.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.5.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.13

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          64 |                   6.8% |                11.0% | **<ins>35.9%</ins>** |     10.3% |          8.0% |               11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         117 |                  39.1% |                41.9% | **<ins>50.0%</ins>** |     41.3% |         41.2% |               41.7% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         131 |                   4.0% |                 7.0% |  **<ins>7.6%</ins>** |      4.5% |          4.9% |                5.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         247 |                   4.7% |                 7.7% |  **<ins>9.8%</ins>** |      6.0% |          6.1% |                6.3% |
| [css-tricks.com](https://css-tricks.com/)                       |         150 |                    N/A |                14.1% | **<ins>25.9%</ins>** |     12.6% |          9.2% |               13.3% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.3% |                 0.3% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                13.0% | **<ins>33.0%</ins>** |     12.1% |          7.9% |               12.6% |
| [w3.org](https://w3.org/)                                       |          48 |                  18.6% | **<ins>24.1%</ins>** |                23.9% |     23.7% |         19.7% |               23.7% |
| [mastodon.social](https://mastodon.social/explore)              |          50 |                   3.8% |                13.3% | **<ins>13.5%</ins>** |      5.7% |          7.0% |                8.3% |
| [apple.com](https://apple.com/)                                 |         248 |                   6.1% |                 8.6% |  **<ins>9.2%</ins>** |      7.6% |          6.7% |                7.0% |
| [leanpub.com](https://leanpub.com/)                             |         506 |                   1.2% |                 8.9% | **<ins>10.1%</ins>** |      5.2% |          1.7% |                5.8% |
| [un.org](https://un.org/en/)                                    |         161 |                  13.5% |                22.4% | **<ins>42.2%</ins>** |     19.1% |         14.4% |               16.8% |
| [weather.com](https://weather.com/)                             |         337 |                   0.5% |                 9.2% |  **<ins>9.4%</ins>** |      6.6% |          0.7% |                6.5% |
| [home.cern](https://home.cern/)                                 |         291 |                    N/A |                11.8% | **<ins>25.6%</ins>** |      8.1% |          4.7% |               10.2% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         182 |                  26.3% |                30.5% | **<ins>68.7%</ins>** |     29.8% |         26.9% |               30.4% |
| [eff.org](https://eff.org/)                                     |          54 |                   8.7% | **<ins>15.7%</ins>** |                15.6% |     13.1% |         11.1% |               13.1% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         764 |                   0.8% |  **<ins>7.1%</ins>** |                 6.7% |      4.8% |          1.2% |                6.3% |
| [github.com](https://github.com/)                               |         563 |                   1.5% |                15.2% | **<ins>15.5%</ins>** |      5.2% |          4.0% |                4.6% |
| [faz.net](https://faz.net/aktuell/)                             |        1595 |                   3.4% |                10.9% | **<ins>15.9%</ins>** |      4.6% |          3.7% |                8.7% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7447 |                   5.7% |                 8.1% |  **<ins>8.3%</ins>** |      6.6% |          6.2% |                7.9% |
| **Avg. minify rate**                                            |             |               **8.2%** |            **14.2%** |            **20.9%** | **11.5%** |      **9.5%** |           **12.1%** |

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
