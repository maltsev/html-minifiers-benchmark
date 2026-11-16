# HTML Minifiers Benchmarks

Updated: 2026-11-16

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/9.1.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.7.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.22

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ---------: |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         114 |                  44.6% |                43.2% | **<ins>48.3%</ins>** |     41.3% |         41.3% |      41.4% |
| [alistapart.com](https://alistapart.com/)                       |          65 |                  14.0% |                25.3% | **<ins>38.1%</ins>** |     10.2% |         11.3% |      10.7% |
| [mastodon.social](https://mastodon.social/explore)              |          45 |   **<ins>22.6%</ins>** |                14.4% |                14.0% |      5.7% |          6.9% |       8.0% |
| [css-tricks.com](https://css-tricks.com/)                       |         183 |   **<ins>41.6%</ins>** |                19.6% |                25.7% |     11.2% |         11.3% |      12.6% |
| [apple.com](https://apple.com/)                                 |         251 |   **<ins>19.7%</ins>** |                11.8% |                10.8% |      7.6% |          6.8% |       6.6% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         259 |                  11.4% |                12.7% | **<ins>12.8%</ins>** |      5.9% |          6.2% |       6.1% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         135 |   **<ins>28.8%</ins>** |                 7.8% |                 7.6% |      4.6% |          5.0% |       5.5% |
| [edri.org](https://edri.org/)                                   |          85 |                  24.6% | **<ins>34.7%</ins>** |                33.8% |     11.3% |         10.6% |      11.7% |
| [w3.org](https://w3.org/)                                       |          48 |                  28.7% | **<ins>28.8%</ins>** |                28.4% |     23.8% |         23.7% |      23.6% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         152 |    **<ins>1.6%</ins>** |                 0.4% |                 0.4% |      0.3% |          0.3% |       0.3% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         187 |                  32.5% | **<ins>69.8%</ins>** | **<ins>69.8%</ins>** |     29.9% |         30.5% |      30.7% |
| [eff.org](https://eff.org/)                                     |          54 |                  18.1% | **<ins>19.5%</ins>** |                18.3% |     13.4% |         12.3% |      13.0% |
| [un.org](https://un.org/en/)                                    |         161 |                  23.6% | **<ins>45.4%</ins>** |                44.9% |     19.2% |         16.8% |      16.7% |
| [weather.com](https://weather.com/)                             |         453 |   **<ins>14.2%</ins>** |                 9.7% |                 9.0% |      7.2% |          7.0% |       7.1% |
| [home.cern](https://home.cern/)                                 |         294 |                  13.9% |                24.4% | **<ins>26.7%</ins>** |      8.0% |          9.7% |      10.1% |
| [leanpub.com](https://leanpub.com/)                             |         529 |   **<ins>16.4%</ins>** |                 8.8% |                 9.3% |      4.9% |          5.2% |       5.3% |
| [github.com](https://github.com/)                               |         513 |   **<ins>32.1%</ins>** |                18.1% |                18.0% |      4.8% |          4.3% |       4.4% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         659 |                   8.0% |  **<ins>8.3%</ins>** |                 8.2% |      4.7% |          6.4% |       6.5% |
| [faz.net](https://faz.net/aktuell/)                             |        1379 |                   7.8% |                13.1% | **<ins>17.9%</ins>** |      4.3% |          4.7% |       9.2% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7637 |    **<ins>9.1%</ins>** |                 7.9% |                 7.3% |      6.5% |          6.0% |       6.1% |
| **Avg. minify rate**                                            |             |              **20.7%** |            **21.2%** |            **22.5%** | **11.2%** |     **11.3%** |  **11.8%** |

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
