# HTML Minifiers Benchmarks

Updated: 2026-07-07

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/7.0.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.3.2
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.43

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |             [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | -------------------: | ------------: | ------------------: |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         118 |                  39.2% |                42.9% | **<ins>52.8%</ins>** |                41.3% |         41.2% |               41.7% |
| [mastodon.social](https://mastodon.social/explore)              |          43 |                   3.6% | **<ins>14.0%</ins>** |                13.9% |                 5.8% |          6.3% |                7.9% |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.9% |                11.1% | **<ins>34.4%</ins>** |                10.4% |          8.1% |               11.0% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         128 |                   4.1% |  **<ins>7.0%</ins>** |                 6.7% |                 4.5% |          4.9% |                5.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         243 |                   4.7% |  **<ins>7.7%</ins>** |                 7.3% |                 6.1% |          6.0% |                6.3% |
| [css-tricks.com](https://css-tricks.com/)                       |         168 |                    N/A |                16.0% |                28.6% |                14.0% |          8.4% |               14.9% |
| [leanpub.com](https://leanpub.com/)                             |         328 |                   1.2% |                 8.3% |                 6.5% | **<ins>81.8%</ins>** |          1.8% |                5.0% |
| [un.org](https://un.org/en/)                                    |         153 |                    N/A |                22.2% |                41.2% |                20.0% |         15.2% |               17.4% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         152 |                  -3.9% |                 0.6% |                -2.6% |                 0.3% |          0.2% | **<ins>1.5%</ins>** |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                12.9% | **<ins>32.2%</ins>** |                12.2% |          7.9% |               12.6% |
| [w3.org](https://w3.org/)                                       |          50 |                  18.8% | **<ins>24.3%</ins>** |                23.2% |                24.2% |         20.2% |               23.9% |
| [apple.com](https://apple.com/)                                 |         244 |                   6.0% |  **<ins>9.6%</ins>** |                 8.6% |                 7.5% |          6.5% |                7.0% |
| [weather.com](https://weather.com/)                             |         347 |                   0.5% |  **<ins>7.5%</ins>** |                 6.2% |                 6.2% |          1.0% |                6.8% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         175 |                  20.0% |                24.6% | **<ins>64.8%</ins>** |                23.7% |         20.6% |               24.3% |
| [eff.org](https://eff.org/)                                     |          54 |                   8.8% | **<ins>15.4%</ins>** |                10.9% |                13.3% |         11.3% |               13.3% |
| [home.cern](https://home.cern/)                                 |         301 |                    N/A |                12.5% |                26.1% |                 7.8% |          4.5% |                9.9% |
| [sitepoint.com](https://sitepoint.com/)                         |         234 |                   0.7% | **<ins>10.0%</ins>** |                 9.6% |                 6.1% |          0.9% |                5.5% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         773 |                   0.8% |  **<ins>7.7%</ins>** |                 6.0% |                 4.8% |          1.2% |                6.7% |
| [github.com](https://github.com/)                               |         552 |                   2.2% | **<ins>16.3%</ins>** |                15.5% |                 6.2% |          4.8% |                5.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1541 |                   3.2% |                10.8% | **<ins>15.4%</ins>** |                 4.4% |          3.5% |                8.6% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7415 |                   5.7% |  **<ins>8.2%</ins>** |                 6.6% |                 6.7% |          6.2% |                8.0% |
| **Avg. minify rate**                                            |             |               **7.2%** |            **13.3%** |            **17.7%** |            **14.7%** |      **8.5%** |           **11.2%** |

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
