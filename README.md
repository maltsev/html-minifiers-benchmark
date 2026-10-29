# HTML Minifiers Benchmarks

Updated: 2026-10-29

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/9.1.1
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.6.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.20

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] | [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ---------: |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         118 |                  44.4% |                43.1% | **<ins>48.0%</ins>** |     41.2% |         41.2% |      41.3% |
| [alistapart.com](https://alistapart.com/)                       |          64 |                  14.1% |                25.7% | **<ins>38.7%</ins>** |     10.3% |         11.4% |      10.8% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         135 |   **<ins>28.7%</ins>** |                 7.8% |                 7.6% |      4.6% |          5.0% |       5.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         253 |                  11.5% | **<ins>12.6%</ins>** |                12.5% |      5.9% |          6.2% |       6.2% |
| [apple.com](https://apple.com/)                                 |         252 |   **<ins>18.5%</ins>** |                10.8% |                10.8% |      7.6% |          6.8% |       6.6% |
| [mastodon.social](https://mastodon.social/explore)              |          52 |   **<ins>20.4%</ins>** |                14.0% |                13.7% |      5.7% |          7.4% |       8.3% |
| [css-tricks.com](https://css-tricks.com/)                       |         143 |                    N/A |                24.5% | **<ins>32.9%</ins>** |     13.5% |         12.9% |      13.4% |
| [w3.org](https://w3.org/)                                       |          49 |   **<ins>28.4%</ins>** | **<ins>28.4%</ins>** |                28.1% |     23.5% |         23.4% |      23.4% |
| [weather.com](https://weather.com/)                             |         408 |   **<ins>15.1%</ins>** |                 9.9% |                 9.2% |      7.2% |          7.0% |       7.1% |
| [edri.org](https://edri.org/)                                   |          85 |                  24.6% | **<ins>34.7%</ins>** |                33.8% |     11.3% |         10.6% |      11.7% |
| [un.org](https://un.org/en/)                                    |         162 |                  23.4% | **<ins>45.0%</ins>** |                44.5% |     19.0% |         16.7% |      16.6% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |    **<ins>1.6%</ins>** |                 0.4% |                 0.4% |      0.3% |          0.2% |       0.3% |
| [eff.org](https://eff.org/)                                     |          53 |                  18.3% | **<ins>19.7%</ins>** |                18.5% |     13.8% |         12.6% |      13.4% |
| [leanpub.com](https://leanpub.com/)                             |         536 |   **<ins>16.7%</ins>** |                 9.2% |                 9.6% |      5.0% |          5.4% |       5.5% |
| [home.cern](https://home.cern/)                                 |         292 |                    N/A |                23.8% | **<ins>26.3%</ins>** |      8.1% |          9.8% |      10.2% |
| [github.com](https://github.com/)                               |         518 |   **<ins>32.0%</ins>** |                18.1% |                18.0% |      4.8% |          4.4% |       4.5% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         729 |                   8.1% |  **<ins>8.2%</ins>** |  **<ins>8.2%</ins>** |      4.6% |          6.4% |       6.5% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         186 |                  32.5% | **<ins>70.1%</ins>** | **<ins>70.1%</ins>** |     29.9% |         30.6% |      30.7% |
| [faz.net](https://faz.net/aktuell/)                             |        1405 |                   7.7% |                12.7% | **<ins>17.6%</ins>** |      4.3% |          4.7% |       9.3% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7462 |    **<ins>9.3%</ins>** |                 8.1% |                 7.5% |      6.6% |          6.2% |       6.3% |
| **Avg. minify rate**                                            |             |              **19.7%** |            **21.0%** |            **22.1%** | **11.4%** |     **11.5%** |  **11.9%** |

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
