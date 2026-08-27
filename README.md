# HTML Minifiers Benchmarks

Updated: 2026-08-27

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/8.2.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.4.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.1

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          64 |                   6.8% |                11.0% | **<ins>35.2%</ins>** |     10.3% |          8.0% |               11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         114 |                  39.1% |                43.0% | **<ins>53.5%</ins>** |     41.3% |         41.3% |               41.8% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         248 |                   4.7% |  **<ins>7.6%</ins>** |                 7.2% |      6.0% |          6.0% |                6.3% |
| [leanpub.com](https://leanpub.com/)                             |         442 |                   1.1% |  **<ins>9.7%</ins>** |                 6.7% |      5.3% |          1.7% |                5.7% |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                12.9% | **<ins>32.3%</ins>** |     12.2% |          7.9% |               12.6% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [eff.org](https://eff.org/)                                     |          53 |                   8.9% | **<ins>15.5%</ins>** |                11.0% |     13.4% |         11.3% |               13.4% |
| [css-tricks.com](https://css-tricks.com/)                       |         173 |                    N/A |                15.6% |                27.5% |     13.7% |          8.6% |               14.4% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         135 |                   4.1% |  **<ins>6.9%</ins>** |                 6.6% |      4.5% |          4.9% |                5.5% |
| [home.cern](https://home.cern/)                                 |         290 |                    N/A |                13.0% |                23.2% |      8.1% |          4.7% |               10.2% |
| [un.org](https://un.org/en/)                                    |         154 |                  14.1% |                22.0% | **<ins>40.9%</ins>** |     19.8% |         15.0% |               17.3% |
| [w3.org](https://w3.org/)                                       |          50 |                  18.9% | **<ins>24.6%</ins>** |                23.3% |     24.3% |         20.3% |               24.0% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         171 |                  20.2% |                24.9% | **<ins>64.6%</ins>** |     24.0% |         20.9% |               24.6% |
| [apple.com](https://apple.com/)                                 |         251 |                   6.0% |  **<ins>9.7%</ins>** |                 8.7% |      7.6% |          6.7% |                6.9% |
| [weather.com](https://weather.com/)                             |         351 |                   0.4% |  **<ins>8.3%</ins>** |                 6.5% |      6.5% |          0.5% |                6.7% |
| [mastodon.social](https://mastodon.social/explore)              |          63 |                   4.1% | **<ins>13.1%</ins>** |                13.0% |      5.7% |          7.7% |                8.9% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         687 |                   0.8% |  **<ins>7.1%</ins>** |                 5.9% |      4.6% |          1.1% |                6.3% |
| [github.com](https://github.com/)                               |         562 |                   1.4% | **<ins>15.5%</ins>** |                14.8% |      5.2% |          4.0% |                4.5% |
| [faz.net](https://faz.net/aktuell/)                             |        1570 |                   3.4% |                10.8% | **<ins>15.6%</ins>** |      4.6% |          3.7% |                8.7% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7416 |                   5.7% |  **<ins>8.2%</ins>** |                 6.6% |      6.7% |          6.2% |                8.0% |
| **Avg. minify rate**                                            |             |               **8.0%** |            **14.0%** |            **19.4%** | **11.2%** |      **9.3%** |           **11.9%** |

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
