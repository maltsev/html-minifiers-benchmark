# HTML Minifiers Benchmarks

Updated: 2026-10-25

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/9.0.1
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.6.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.20

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          64 |                  14.2% |                25.7% | **<ins>38.6%</ins>** |     10.3% |         11.4% |      10.8% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         117 |                  44.5% |                43.1% | **<ins>48.1%</ins>** |     41.3% |         41.3% |      41.3% |
| [css-tricks.com](https://css-tricks.com/)                       |         151 |                    N/A |                21.8% | **<ins>29.6%</ins>** |     12.6% |         12.3% |      12.8% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         251 |                  11.3% | **<ins>12.5%</ins>** |                12.4% |      5.9% |          6.2% |       6.2% |
| [edri.org](https://edri.org/)                                   |          86 |                  24.8% | **<ins>34.6%</ins>** |                33.7% |     11.4% |         10.6% |      11.8% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |    **<ins>1.6%</ins>** |                 0.4% |                 0.4% |      0.3% |          0.2% |       0.3% |
| [weather.com](https://weather.com/)                             |         414 |   **<ins>15.1%</ins>** |                 9.8% |                 9.2% |      7.3% |          7.1% |       7.2% |
| [leanpub.com](https://leanpub.com/)                             |         539 |   **<ins>16.4%</ins>** |                 9.1% |                 9.3% |      5.0% |          5.4% |       5.5% |
| [mastodon.social](https://mastodon.social/explore)              |          49 |   **<ins>21.4%</ins>** |                14.2% |                13.8% |      5.7% |          7.2% |       8.2% |
| [w3.org](https://w3.org/)                                       |          48 |                  28.6% | **<ins>28.7%</ins>** |                28.3% |     23.7% |         23.6% |      23.5% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         136 |   **<ins>28.6%</ins>** |                 7.6% |                 7.6% |      4.6% |          5.0% |       5.5% |
| [un.org](https://un.org/en/)                                    |         162 |                  23.5% | **<ins>45.0%</ins>** |                44.7% |     19.1% |         16.7% |      16.6% |
| [apple.com](https://apple.com/)                                 |         319 |   **<ins>14.6%</ins>** |                 8.6% |                 8.7% |      6.2% |          5.4% |       5.3% |
| [github.com](https://github.com/)                               |         567 |   **<ins>36.6%</ins>** |                15.8% |                15.9% |      5.2% |          4.1% |       4.6% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         187 |                  32.4% | **<ins>69.8%</ins>** | **<ins>69.8%</ins>** |     29.8% |         30.4% |      30.5% |
| [eff.org](https://eff.org/)                                     |          53 |                  18.1% | **<ins>19.3%</ins>** |                18.4% |     13.5% |         12.4% |      13.2% |
| [home.cern](https://home.cern/)                                 |         292 |                    N/A |                23.7% | **<ins>26.2%</ins>** |      8.0% |          9.8% |      10.2% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         733 |                   7.9% |  **<ins>8.1%</ins>** |  **<ins>8.1%</ins>** |      4.8% |          6.3% |       6.5% |
| [faz.net](https://faz.net/aktuell/)                             |        1359 |                   7.8% |                12.6% | **<ins>17.9%</ins>** |      4.3% |          4.7% |       9.4% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7462 |    **<ins>9.3%</ins>** |                 8.1% |                 7.5% |      6.6% |          6.2% |       6.3% |
| **Avg. minify rate**                                            |             |              **19.8%** |            **20.7%** |            **21.8%** | **11.4%** |     **11.4%** |  **11.8%** |

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
