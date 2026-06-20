# HTML Minifiers Benchmarks

Updated: 2026-06-20

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
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.41

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.9% |                11.0% | **<ins>34.1%</ins>** |     10.3% |          8.1% |               11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         113 |                  38.2% |                42.1% | **<ins>52.5%</ins>** |     40.4% |         40.4% |               40.9% |
| [css-tricks.com](https://css-tricks.com/)                       |         167 |                    N/A |                16.2% |                28.4% |     14.1% |          8.5% |               15.0% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         229 |                   4.6% |  **<ins>7.5%</ins>** |                 7.3% |      6.1% |          6.0% |                6.3% |
| [leanpub.com](https://leanpub.com/)                             |         359 |                   1.1% |  **<ins>8.4%</ins>** |                 6.5% |      4.7% |          1.8% |                5.2% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         127 |                   4.0% |  **<ins>7.0%</ins>** |                 6.6% |      4.5% |          4.8% |                5.5% |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                12.8% | **<ins>32.2%</ins>** |     12.0% |          7.8% |               12.5% |
| [w3.org](https://w3.org/)                                       |          50 |                  18.9% | **<ins>24.4%</ins>** |                23.3% |     24.3% |         20.3% |               24.0% |
| [un.org](https://un.org/en/)                                    |         155 |                  14.1% |                22.0% | **<ins>40.7%</ins>** |     19.7% |         15.0% |               17.2% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [apple.com](https://apple.com/)                                 |         281 |                   6.2% |  **<ins>9.4%</ins>** |                 8.6% |      7.7% |          6.9% |                7.2% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         174 |                  19.9% |                24.5% | **<ins>64.8%</ins>** |     23.6% |         20.5% |               24.2% |
| [home.cern](https://home.cern/)                                 |         291 |                    N/A |                12.5% |                26.8% |      8.0% |          4.5% |                9.9% |
| [weather.com](https://weather.com/)                             |         332 |                   0.6% |  **<ins>7.5%</ins>** |                 5.9% |      6.1% |          1.3% |                6.9% |
| [eff.org](https://eff.org/)                                     |          54 |                   8.8% | **<ins>15.3%</ins>** |                10.9% |     13.3% |         11.2% |               13.2% |
| [mastodon.social](https://mastodon.social/explore)              |          43 |                   3.5% | **<ins>14.0%</ins>** |                13.9% |      5.8% |          6.3% |                7.9% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         859 |                   0.9% |  **<ins>7.9%</ins>** |                 6.0% |      4.8% |          1.2% |                6.7% |
| [github.com](https://github.com/)                               |         551 |                   2.2% | **<ins>16.3%</ins>** |                15.6% |      6.2% |          4.8% |                5.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1559 |                   3.2% |                10.7% | **<ins>15.2%</ins>** |      4.4% |          3.5% |                8.6% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7264 |                   5.7% |  **<ins>8.2%</ins>** |                 6.6% |      6.6% |          6.2% |                7.9% |
| **Avg. minify rate**                                            |             |               **7.9%** |            **13.9%** |            **19.3%** | **11.2%** |      **9.2%** |           **11.8%** |

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
