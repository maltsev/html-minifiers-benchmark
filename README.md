# HTML Minifiers Benchmarks

Updated: 2026-10-18

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/8.11.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.6.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.18

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          64 |                   6.8% |                11.0% | **<ins>35.6%</ins>** |     10.3% |          8.0% |               11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         116 |                  39.1% |                42.2% | **<ins>47.2%</ins>** |     41.3% |         41.2% |               41.7% |
| [css-tricks.com](https://css-tricks.com/)                       |         151 |                    N/A |                14.1% | **<ins>25.2%</ins>** |     12.6% |          9.1% |               13.2% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.3% |                 0.2% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         247 |                   4.7% |                 7.7% |  **<ins>9.8%</ins>** |      6.0% |          6.1% |                6.3% |
| [eff.org](https://eff.org/)                                     |          54 |                   8.9% | **<ins>15.8%</ins>** |                15.1% |     13.4% |         11.3% |               13.3% |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                13.9% | **<ins>32.1%</ins>** |     12.1% |          7.9% |               12.6% |
| [mastodon.social](https://mastodon.social/explore)              |          50 |                   3.8% | **<ins>13.7%</ins>** |                13.3% |      5.7% |          7.0% |                8.3% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         135 |                   4.0% |                 6.9% |  **<ins>7.0%</ins>** |      4.5% |          4.9% |                5.5% |
| [home.cern](https://home.cern/)                                 |         292 |                    N/A |                11.7% | **<ins>24.5%</ins>** |      8.0% |          4.7% |               10.2% |
| [un.org](https://un.org/en/)                                    |         161 |                  13.5% |                22.4% | **<ins>42.3%</ins>** |     19.1% |         14.4% |               16.8% |
| [leanpub.com](https://leanpub.com/)                             |         531 |                   1.2% |                 8.8% |  **<ins>9.4%</ins>** |      5.1% |          1.7% |                5.7% |
| [apple.com](https://apple.com/)                                 |         319 |                   4.8% |                 7.1% |  **<ins>7.3%</ins>** |      6.2% |          5.4% |                5.6% |
| [weather.com](https://weather.com/)                             |         342 |                   0.6% |  **<ins>9.6%</ins>** |                 9.0% |      7.1% |          1.0% |                7.1% |
| [w3.org](https://w3.org/)                                       |          49 |                  18.1% | **<ins>23.5%</ins>** |                23.2% |     23.1% |         19.2% |               23.1% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         187 |                  26.4% |                30.7% | **<ins>67.7%</ins>** |     29.8% |         26.9% |               30.4% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         741 |                   0.8% |                 7.0% |  **<ins>7.3%</ins>** |      4.7% |          1.2% |                6.2% |
| [github.com](https://github.com/)                               |         559 |                   1.5% | **<ins>15.5%</ins>** | **<ins>15.5%</ins>** |      5.2% |          4.1% |                4.6% |
| [faz.net](https://faz.net/aktuell/)                             |        1413 |                   3.9% |                10.7% | **<ins>16.5%</ins>** |      4.3% |          4.3% |                9.4% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7450 |                   5.7% |  **<ins>8.1%</ins>** |                 7.5% |      6.6% |          6.2% |                7.9% |
| **Avg. minify rate**                                            |             |               **8.2%** |            **14.2%** |            **20.3%** | **11.4%** |      **9.5%** |           **12.1%** |

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
