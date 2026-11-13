# HTML Minifiers Benchmarks

Updated: 2026-11-13

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/9.1.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.6.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.22

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ---------: |
| [alistapart.com](https://alistapart.com/)                       |          65 |                  13.9% |                25.2% | **<ins>38.1%</ins>** |     10.1% |         11.3% |      10.7% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         119 |                  44.4% |                43.0% | **<ins>47.9%</ins>** |     41.2% |         41.2% |      41.2% |
| [css-tricks.com](https://css-tricks.com/)                       |         183 |   **<ins>41.5%</ins>** |                19.6% |                25.6% |     11.1% |         11.3% |      12.7% |
| [mastodon.social](https://mastodon.social/explore)              |          45 |   **<ins>22.7%</ins>** |                14.4% |                14.0% |      5.7% |          6.9% |       7.9% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         259 |                  11.3% |                12.6% | **<ins>12.7%</ins>** |      5.8% |          6.1% |       6.0% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         186 |                  32.5% | **<ins>70.1%</ins>** | **<ins>70.1%</ins>** |     29.9% |         30.6% |      30.7% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         135 |   **<ins>28.8%</ins>** |                 7.9% |                 7.6% |      4.6% |          5.0% |       5.5% |
| [edri.org](https://edri.org/)                                   |          85 |                  24.6% | **<ins>34.7%</ins>** |                33.8% |     11.3% |         10.6% |      11.7% |
| [eff.org](https://eff.org/)                                     |          54 |                  18.1% | **<ins>19.5%</ins>** |                18.3% |     13.4% |         12.3% |      13.0% |
| [w3.org](https://w3.org/)                                       |          48 |   **<ins>28.7%</ins>** | **<ins>28.7%</ins>** |                28.3% |     23.7% |         23.6% |      23.6% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         152 |    **<ins>1.6%</ins>** |                 0.4% |                 0.4% |      0.3% |          0.3% |       0.3% |
| [un.org](https://un.org/en/)                                    |         161 |                  23.6% | **<ins>45.4%</ins>** |                44.9% |     19.2% |         16.9% |      16.7% |
| [apple.com](https://apple.com/)                                 |         250 |   **<ins>19.7%</ins>** |                11.8% |                10.8% |      7.6% |          6.7% |       6.5% |
| [home.cern](https://home.cern/)                                 |         292 |                    N/A |                23.8% | **<ins>26.3%</ins>** |      8.1% |          9.8% |      10.2% |
| [weather.com](https://weather.com/)                             |         455 |   **<ins>14.2%</ins>** |                 9.7% |                 9.0% |      7.2% |          7.0% |       7.1% |
| [github.com](https://github.com/)                               |         513 |   **<ins>32.2%</ins>** |                18.1% |                18.0% |      4.8% |          4.3% |       4.4% |
| [leanpub.com](https://leanpub.com/)                             |         523 |   **<ins>16.7%</ins>** |                 9.0% |                 9.5% |      5.0% |          5.4% |       5.5% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         684 |                   7.8% |  **<ins>8.2%</ins>** |  **<ins>8.2%</ins>** |      4.7% |          6.4% |       6.5% |
| [faz.net](https://faz.net/aktuell/)                             |        1353 |                   7.7% |                13.3% | **<ins>18.1%</ins>** |      4.3% |          4.6% |       9.2% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7637 |    **<ins>9.1%</ins>** |                 7.9% |                 7.3% |      6.5% |          6.0% |       6.1% |
| **Avg. minify rate**                                            |             |              **21.0%** |            **21.0%** |            **22.2%** | **11.4%** |     **11.4%** |  **11.9%** |

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
