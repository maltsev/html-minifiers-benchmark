# HTML Minifiers Benchmarks

Updated: 2026-05-05

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/6.2.3
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.2.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.33

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.4% |                11.3% | **<ins>34.1%</ins>** |     10.8% |          8.6% |               11.3% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         115 |                  38.9% |                42.7% | **<ins>50.9%</ins>** |     41.1% |         41.0% |               41.5% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.1% | **<ins>14.9%</ins>** |                14.7% |      5.8% |          5.2% |                7.2% |
| [leanpub.com](https://leanpub.com/)                             |         342 |                   1.2% |  **<ins>9.2%</ins>** |                 6.8% |      5.0% |          1.9% |                5.4% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         225 |                   4.5% |  **<ins>7.4%</ins>** |                 7.3% |      6.1% |          5.9% |                6.3% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         138 |                   3.8% |  **<ins>7.3%</ins>** |                 7.0% |      4.4% |          4.6% |                5.2% |
| [css-tricks.com](https://css-tricks.com/)                       |         164 |                   8.6% |                16.6% | **<ins>28.9%</ins>** |     14.6% |          8.7% |               15.4% |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                13.4% | **<ins>32.3%</ins>** |     12.1% |          7.8% |               12.5% |
| [apple.com](https://apple.com/)                                 |         303 |                   7.0% | **<ins>10.0%</ins>** |                 9.3% |      8.4% |          7.6% |                7.9% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.9% | **<ins>24.4%</ins>** |                23.2% |     24.3% |         20.3% |               24.0% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         154 |                  13.2% |                17.7% | **<ins>63.3%</ins>** |     16.8% |         13.8% |               17.4% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [un.org](https://un.org/en/)                                    |         152 |                  14.2% |                22.6% | **<ins>41.2%</ins>** |     20.0% |         15.1% |               17.4% |
| [eff.org](https://eff.org/)                                     |          54 |                   8.8% | **<ins>15.5%</ins>** |                10.9% |     13.3% |         11.3% |               13.3% |
| [home.cern](https://home.cern/)                                 |         281 |                    N/A |                12.7% |                25.0% |      8.2% |          4.6% |               10.1% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         679 |                   0.8% |  **<ins>7.5%</ins>** |                 5.8% |      4.6% |          1.3% |                6.6% |
| [sitepoint.com](https://sitepoint.com/)                         |         234 |                   0.7% | **<ins>10.1%</ins>** |                 9.7% |      6.2% |          1.0% |                5.6% |
| [github.com](https://github.com/)                               |         554 |                   3.0% | **<ins>17.4%</ins>** |                16.6% |      7.3% |          5.8% |                6.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1414 |                   3.3% |                 6.7% | **<ins>11.7%</ins>** |      4.4% |          3.6% |                4.5% |
| [weather.com](https://weather.com/)                             |        2294 |                   0.1% |  **<ins>9.3%</ins>** |                 9.1% |      9.2% |          0.2% | **<ins>9.3%</ins>** |
| [tc39.es](https://tc39.es/ecma262/)                             |        7237 |                   5.7% |  **<ins>8.2%</ins>** |                 6.6% |      6.7% |          6.2% |                8.0% |
| **Avg. minify rate**                                            |             |               **7.3%** |            **13.6%** |            **19.3%** | **11.1%** |      **8.5%** |           **11.3%** |

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
