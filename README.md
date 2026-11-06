# HTML Minifiers Benchmarks

Updated: 2026-11-06

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
| [alistapart.com](https://alistapart.com/)                       |          64 |                  14.1% |                25.7% | **<ins>38.7%</ins>** |     10.3% |         11.4% |      10.8% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         117 |                  44.5% |                43.1% | **<ins>48.1%</ins>** |     41.3% |         41.3% |      41.3% |
| [css-tricks.com](https://css-tricks.com/)                       |         152 |                    N/A |                23.3% | **<ins>31.2%</ins>** |     12.9% |         12.3% |      12.9% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         135 |   **<ins>28.8%</ins>** |                 7.8% |                 7.6% |      4.6% |          5.0% |       5.5% |
| [mastodon.social](https://mastodon.social/explore)              |          50 |   **<ins>20.9%</ins>** |                14.1% |                13.8% |      5.7% |          7.3% |       8.2% |
| [apple.com](https://apple.com/)                                 |         248 |   **<ins>18.5%</ins>** |                10.8% |                10.9% |      7.6% |          6.7% |       6.6% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         259 |                  11.4% | **<ins>12.7%</ins>** |                12.5% |      5.9% |          6.2% |       6.1% |
| [edri.org](https://edri.org/)                                   |          85 |                  24.6% | **<ins>34.7%</ins>** |                33.8% |     11.3% |         10.6% |      11.7% |
| [leanpub.com](https://leanpub.com/)                             |         512 |   **<ins>16.9%</ins>** |                 9.1% |                 9.5% |      4.9% |          5.3% |       5.4% |
| [w3.org](https://w3.org/)                                       |          49 |   **<ins>28.6%</ins>** | **<ins>28.6%</ins>** |                28.3% |     23.7% |         23.5% |      23.5% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         187 |                  32.5% | **<ins>69.8%</ins>** | **<ins>69.8%</ins>** |     29.9% |         30.5% |      30.7% |
| [weather.com](https://weather.com/)                             |         417 |   **<ins>15.0%</ins>** |                 9.9% |                 9.2% |      7.2% |          7.0% |       7.1% |
| [home.cern](https://home.cern/)                                 |         292 |                    N/A |                23.8% | **<ins>26.3%</ins>** |      8.1% |          9.8% |      10.2% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         152 |    **<ins>1.6%</ins>** |                 0.4% |                 0.4% |      0.3% |          0.3% |       0.3% |
| [un.org](https://un.org/en/)                                    |         162 |                  23.5% | **<ins>45.2%</ins>** |                44.7% |     19.1% |         16.8% |      16.6% |
| [eff.org](https://eff.org/)                                     |          53 |                  18.1% | **<ins>19.5%</ins>** |                18.4% |     13.5% |         12.4% |      13.2% |
| [github.com](https://github.com/)                               |         516 |   **<ins>32.0%</ins>** |                18.0% |                18.0% |      4.8% |          4.3% |       4.4% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         692 |                   7.8% |  **<ins>8.1%</ins>** |                 8.0% |      4.7% |          6.3% |       6.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1407 |                   7.7% |                13.0% | **<ins>17.9%</ins>** |      4.3% |          4.6% |       9.3% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7636 |    **<ins>9.1%</ins>** |                 7.9% |                 7.3% |      6.5% |          6.0% |       6.1% |
| **Avg. minify rate**                                            |             |              **19.8%** |            **21.0%** |            **22.0%** | **11.4%** |     **11.4%** |  **11.8%** |

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
