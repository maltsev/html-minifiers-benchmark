# HTML Minifiers Benchmarks

Updated: 2026-11-26

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
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         115 |                  44.6% |                43.2% | **<ins>48.3%</ins>** |     41.3% |         41.3% |      41.4% |
| [alistapart.com](https://alistapart.com/)                       |          65 |                  13.9% |                25.2% | **<ins>37.9%</ins>** |     10.1% |         11.2% |      10.7% |
| [css-tricks.com](https://css-tricks.com/)                       |         186 |   **<ins>41.4%</ins>** |                19.5% |                26.3% |     11.2% |         11.4% |      12.7% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         134 |   **<ins>28.6%</ins>** |                 7.9% |                 7.7% |      4.6% |          5.0% |       5.5% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         185 |                  32.4% | **<ins>70.1%</ins>** | **<ins>70.1%</ins>** |     29.8% |         30.3% |      30.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         255 |                  11.5% |                12.7% | **<ins>12.8%</ins>** |      5.9% |          6.2% |       6.1% |
| [edri.org](https://edri.org/)                                   |          86 |                  24.5% | **<ins>34.5%</ins>** |                33.6% |     11.3% |         10.5% |      11.7% |
| [mastodon.social](https://mastodon.social/explore)              |          36 |                   6.1% |  **<ins>9.8%</ins>** |                 9.7% |      5.5% |          8.3% |       9.1% |
| [w3.org](https://w3.org/)                                       |          48 |   **<ins>28.9%</ins>** | **<ins>28.9%</ins>** |                28.6% |     23.9% |         23.8% |      23.7% |
| [apple.com](https://apple.com/)                                 |         247 |   **<ins>18.9%</ins>** |                11.3% |                10.9% |      7.6% |          6.8% |       6.6% |
| [home.cern](https://home.cern/)                                 |         294 |                  13.9% |                24.4% | **<ins>26.6%</ins>** |      8.0% |          9.7% |      10.1% |
| [eff.org](https://eff.org/)                                     |          56 |                  18.1% | **<ins>19.4%</ins>** |                18.2% |     13.2% |         12.1% |      12.8% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         152 |    **<ins>1.6%</ins>** |                 0.4% |                 0.4% |      0.3% |          0.2% |       0.3% |
| [weather.com](https://weather.com/)                             |         401 |   **<ins>15.8%</ins>** |                11.1% |                10.3% |      8.5% |          8.3% |       8.4% |
| [leanpub.com](https://leanpub.com/)                             |         525 |   **<ins>16.5%</ins>** |                 8.9% |                 9.4% |      5.0% |          5.3% |       5.4% |
| [un.org](https://un.org/en/)                                    |         162 |                  23.4% | **<ins>45.0%</ins>** |                44.5% |     19.0% |         16.7% |      16.5% |
| [github.com](https://github.com/)                               |         525 |   **<ins>31.5%</ins>** |                17.7% |                17.6% |      4.7% |          4.2% |       4.3% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         702 |                   7.7% |  **<ins>8.1%</ins>** |  **<ins>8.1%</ins>** |      4.7% |          6.3% |       6.5% |
| [faz.net](https://faz.net/aktuell/)                             |        1387 |                   7.7% |                13.0% | **<ins>17.8%</ins>** |      4.3% |          4.6% |       9.2% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7643 |    **<ins>9.1%</ins>** |                 7.9% |                 7.2% |      6.4% |          6.0% |       6.1% |
| **Avg. minify rate**                                            |             |              **19.8%** |            **20.9%** |            **22.3%** | **11.3%** |     **11.4%** |  **11.9%** |

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
