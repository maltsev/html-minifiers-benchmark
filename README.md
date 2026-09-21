# HTML Minifiers Benchmarks

Updated: 2026-09-21

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/8.5.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.5.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.2

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          64 |                   6.8% |                11.0% | **<ins>35.9%</ins>** |     10.3% |          8.0% |               11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         119 |                  39.0% |                42.7% | **<ins>49.8%</ins>** |     41.2% |         41.1% |               41.6% |
| [css-tricks.com](https://css-tricks.com/)                       |         174 |                    N/A |                15.2% | **<ins>27.7%</ins>** |     13.7% |          8.5% |               14.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         254 |                   4.6% |                 7.6% |  **<ins>9.6%</ins>** |      5.9% |          6.0% |                6.2% |
| [github.com](https://github.com/)                               |         562 |                   1.4% |                15.4% | **<ins>15.5%</ins>** |      5.2% |          4.0% |                4.5% |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                12.9% | **<ins>32.9%</ins>** |     12.2% |          7.9% |               12.6% |
| [leanpub.com](https://leanpub.com/)                             |         487 |                   1.2% |                 9.6% | **<ins>10.1%</ins>** |      5.2% |          1.8% |                5.7% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         132 |                   4.0% |                 7.0% |  **<ins>7.7%</ins>** |      4.6% |          4.9% |                5.5% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |                 0.3% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [mastodon.social](https://mastodon.social/explore)              |          50 |                   3.8% |                13.3% | **<ins>13.5%</ins>** |      5.7% |          7.0% |                8.4% |
| [eff.org](https://eff.org/)                                     |          54 |                   8.7% |                15.2% | **<ins>15.7%</ins>** |     13.2% |         11.1% |               13.2% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         169 |                  20.0% |                24.7% | **<ins>65.3%</ins>** |     23.8% |         20.6% |               24.4% |
| [weather.com](https://weather.com/)                             |         351 |                   0.5% |                 8.5% |  **<ins>9.2%</ins>** |      6.7% |          0.6% |                6.9% |
| [apple.com](https://apple.com/)                                 |         305 |                   4.9% |  **<ins>7.8%</ins>** |                 7.7% |      6.3% |          5.5% |                5.8% |
| [home.cern](https://home.cern/)                                 |         291 |                    N/A |                13.0% | **<ins>25.6%</ins>** |      8.1% |          4.7% |               10.2% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         698 |                   0.8% |  **<ins>7.2%</ins>** |                 6.8% |      4.7% |          1.2% |                6.4% |
| [w3.org](https://w3.org/)                                       |          50 |                  18.9% | **<ins>24.5%</ins>** |                24.2% |     24.3% |         20.3% |               24.0% |
| [faz.net](https://faz.net/aktuell/)                             |        1609 |                   3.4% |                10.4% | **<ins>15.8%</ins>** |      4.6% |          3.7% |                8.6% |
| [un.org](https://un.org/en/)                                    |         162 |                  13.4% |                21.2% | **<ins>42.0%</ins>** |     19.0% |         14.4% |               16.7% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7448 |                   5.7% |                 8.2% |  **<ins>8.3%</ins>** |      6.6% |          6.2% |                7.9% |
| **Avg. minify rate**                                            |             |               **7.8%** |            **13.8%** |            **20.6%** | **11.1%** |      **9.1%** |           **11.7%** |

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
