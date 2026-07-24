# HTML Minifiers Benchmarks

Updated: 2026-07-24

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/7.5.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.4.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.46

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         118 |                  39.1% |                42.9% | **<ins>52.8%</ins>** |     41.3% |         41.2% |               41.7% |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.9% |                11.0% | **<ins>34.2%</ins>** |     10.3% |          8.1% |               11.0% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         128 |                   4.1% |  **<ins>7.1%</ins>** |                 6.7% |      4.6% |          4.9% |                5.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         250 |                   4.7% |  **<ins>7.5%</ins>** |                 7.2% |      6.0% |          5.9% |                6.2% |
| [css-tricks.com](https://css-tricks.com/)                       |         148 |                    N/A |                14.6% |                26.0% |     12.6% |          9.4% |               13.3% |
| [leanpub.com](https://leanpub.com/)                             |         360 |                   1.1% |  **<ins>9.0%</ins>** |                 7.2% |      5.4% |          1.7% |                5.9% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [w3.org](https://w3.org/)                                       |          52 |                  18.4% | **<ins>23.8%</ins>** |                22.6% |     23.7% |         19.8% |               23.4% |
| [mastodon.social](https://mastodon.social/explore)              |          43 |                   3.6% | **<ins>14.0%</ins>** |                13.9% |      5.8% |          6.3% |                7.9% |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                12.9% | **<ins>32.3%</ins>** |     12.2% |          7.9% |               12.6% |
| [un.org](https://un.org/en/)                                    |         152 |                    N/A |                22.2% |                41.3% |     19.9% |         15.1% |               17.4% |
| [apple.com](https://apple.com/)                                 |         243 |                   6.0% |  **<ins>9.7%</ins>** |                 8.7% |      7.5% |          6.6% |                7.1% |
| [weather.com](https://weather.com/)                             |         331 |                   0.5% |  **<ins>8.2%</ins>** |                 6.5% |      6.4% |          0.6% |                6.7% |
| [home.cern](https://home.cern/)                                 |         291 |                    N/A |                12.9% |                23.6% |      8.0% |          4.7% |               10.2% |
| [eff.org](https://eff.org/)                                     |          53 |                   8.8% | **<ins>15.3%</ins>** |                10.9% |     13.3% |         11.2% |               13.2% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         175 |                  19.8% |                24.4% | **<ins>64.5%</ins>** |     23.5% |         20.4% |               24.0% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         731 |                   0.8% |  **<ins>7.4%</ins>** |                 5.9% |      4.7% |          1.1% |                6.6% |
| [github.com](https://github.com/)                               |         565 |                   2.1% | **<ins>16.1%</ins>** |                15.4% |      6.0% |          4.7% |                5.3% |
| [faz.net](https://faz.net/aktuell/)                             |        1545 |                   3.2% |                10.7% | **<ins>15.2%</ins>** |      4.4% |          3.5% |                8.6% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7421 |                   5.7% |  **<ins>8.2%</ins>** |                 6.6% |      6.7% |          6.2% |                8.0% |
| **Avg. minify rate**                                            |             |               **7.6%** |            **13.5%** |            **18.1%** | **10.7%** |      **8.9%** |           **11.5%** |

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
