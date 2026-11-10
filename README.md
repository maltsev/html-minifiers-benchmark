# HTML Minifiers Benchmarks

Updated: 2026-11-10

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
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         116 |                  44.5% |                43.1% | **<ins>48.1%</ins>** |     41.3% |         41.3% |      41.3% |
| [alistapart.com](https://alistapart.com/)                       |          64 |                  14.1% |                25.7% | **<ins>38.7%</ins>** |     10.3% |         11.4% |      10.8% |
| [css-tricks.com](https://css-tricks.com/)                       |         182 |   **<ins>41.7%</ins>** |                19.6% |                25.7% |     11.2% |         11.3% |      12.8% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         135 |   **<ins>28.8%</ins>** |                 7.8% |                 7.6% |      4.6% |          5.0% |       5.5% |
| [mastodon.social](https://mastodon.social/explore)              |          46 |   **<ins>22.3%</ins>** |                14.4% |                14.0% |      5.7% |          7.0% |       8.0% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         251 |                  11.3% |                12.5% | **<ins>12.7%</ins>** |      5.9% |          6.2% |       6.1% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         152 |    **<ins>1.6%</ins>** |                 0.4% |                 0.4% |      0.3% |          0.3% |       0.3% |
| [w3.org](https://w3.org/)                                       |          49 |   **<ins>28.6%</ins>** | **<ins>28.6%</ins>** |                28.3% |     23.7% |         23.6% |      23.5% |
| [edri.org](https://edri.org/)                                   |          85 |                  24.6% | **<ins>34.7%</ins>** |                33.8% |     11.3% |         10.6% |      11.7% |
| [un.org](https://un.org/en/)                                    |         162 |                  23.5% | **<ins>45.2%</ins>** |                44.7% |     19.1% |         16.8% |      16.6% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         187 |                  32.5% | **<ins>69.8%</ins>** | **<ins>69.8%</ins>** |     29.9% |         30.5% |      30.7% |
| [apple.com](https://apple.com/)                                 |         250 |   **<ins>19.7%</ins>** |                11.8% |                10.8% |      7.6% |          6.7% |       6.5% |
| [eff.org](https://eff.org/)                                     |          54 |                  18.0% | **<ins>19.3%</ins>** |                18.2% |     13.3% |         12.2% |      13.0% |
| [weather.com](https://weather.com/)                             |         444 |   **<ins>14.5%</ins>** |                 9.7% |                 9.1% |      7.2% |          7.0% |       7.1% |
| [leanpub.com](https://leanpub.com/)                             |         532 |   **<ins>16.5%</ins>** |                 9.0% |                 9.4% |      5.0% |          5.4% |       5.4% |
| [home.cern](https://home.cern/)                                 |         292 |                    N/A |                23.8% | **<ins>26.3%</ins>** |      8.1% |          9.8% |      10.2% |
| [github.com](https://github.com/)                               |         513 |   **<ins>32.2%</ins>** |                18.1% |                18.0% |      4.8% |          4.3% |       4.4% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         682 |                   7.7% |  **<ins>8.2%</ins>** |  **<ins>8.2%</ins>** |      4.7% |          6.4% |       6.5% |
| [faz.net](https://faz.net/aktuell/)                             |        1361 |                   7.6% |                13.1% | **<ins>18.0%</ins>** |      4.3% |          4.6% |       9.3% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7636 |    **<ins>9.1%</ins>** |                 7.9% |                 7.3% |      6.5% |          6.0% |       6.1% |
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
