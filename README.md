# HTML Minifiers Benchmarks

Updated: 2026-08-02

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/7.5.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.4.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.47

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |            [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | ------------------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.9% |                11.0% | **<ins>34.2%</ins>** |               10.3% |          8.2% |               11.0% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |           1 |                   4.9% |                 5.7% |                 5.1% | **<ins>7.9%</ins>** |          7.5% |                7.5% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         134 |                   4.1% |  **<ins>7.0%</ins>** |                 6.6% |                4.6% |          5.0% |                5.6% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         246 |                   4.7% |  **<ins>7.6%</ins>** |                 7.3% |                6.0% |          6.0% |                6.3% |
| [css-tricks.com](https://css-tricks.com/)                       |         148 |                    N/A |                14.6% |                25.9% |               12.6% |          9.4% |               13.3% |
| [leanpub.com](https://leanpub.com/)                             |         356 |                   1.1% |  **<ins>8.5%</ins>** |                 6.7% |                4.8% |          1.8% |                5.4% |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                12.9% | **<ins>32.3%</ins>** |               12.2% |          7.9% |               12.6% |
| [mastodon.social](https://mastodon.social/explore)              |          54 |                   3.9% | **<ins>13.5%</ins>** |                13.4% |                5.8% |          7.2% |                8.6% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |                -2.6% |                0.3% |          0.2% | **<ins>1.5%</ins>** |
| [w3.org](https://w3.org/)                                       |          52 |                  18.6% | **<ins>23.9%</ins>** |                22.8% |               23.8% |         19.9% |               23.5% |
| [eff.org](https://eff.org/)                                     |          54 |                   8.7% | **<ins>15.3%</ins>** |                10.8% |               13.2% |         11.2% |               13.2% |
| [apple.com](https://apple.com/)                                 |         251 |                   6.0% |  **<ins>9.6%</ins>** |                 8.7% |                7.6% |          6.8% |                7.0% |
| [weather.com](https://weather.com/)                             |         330 |                   0.5% |  **<ins>8.4%</ins>** |                 6.3% |                6.4% |          0.6% |                6.6% |
| [home.cern](https://home.cern/)                                 |         290 |                    N/A |                12.9% |                23.6% |                8.1% |          4.7% |               10.2% |
| [un.org](https://un.org/en/)                                    |         154 |                    N/A |                22.1% |                41.0% |               19.8% |         15.1% |               17.3% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         118 |                  39.1% |                42.9% | **<ins>52.8%</ins>** |               41.3% |         41.2% |               41.7% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         714 |                   0.7% |  **<ins>7.3%</ins>** |                 6.0% |                4.9% |          1.2% |                6.5% |
| [github.com](https://github.com/)                               |         578 |                   2.1% | **<ins>15.8%</ins>** |                15.0% |                5.9% |          4.6% |                5.2% |
| [faz.net](https://faz.net/aktuell/)                             |        1606 |                   3.2% |                10.5% | **<ins>15.0%</ins>** |                4.4% |          3.5% |                8.5% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7421 |                   5.7% |  **<ins>8.2%</ins>** |                 6.6% |                6.7% |          6.2% |                8.0% |
| **Avg. minify rate**                                            |             |               **6.7%** |            **12.3%** |            **14.5%** |            **9.8%** |      **8.2%** |           **10.5%** |

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
