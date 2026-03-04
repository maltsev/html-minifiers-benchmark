# HTML Minifiers Benchmarks

Updated: 2026-03-04

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/5.1.5
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.2.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.18

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |             [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | -------------------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.5% | **<ins>34.5%</ins>** |                11.1% |          8.7% |               11.5% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         109 |                  37.9% |                41.6% | **<ins>52.7%</ins>** |                40.1% |         40.0% |               40.5% |
| [apple.com](https://apple.com/)                                 |         223 |                   9.0% | **<ins>13.5%</ins>** |                11.9% |                10.7% |          9.9% |               10.2% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         231 |                   4.4% |  **<ins>7.2%</ins>** |                 7.1% |                 6.0% |          5.8% |                6.2% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.1% |                12.8% | **<ins>14.7%</ins>** |                 5.9% |          5.2% |                7.2% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         141 |                   3.7% |  **<ins>7.2%</ins>** |                 6.8% |                 4.3% |          4.5% |                5.1% |
| [edri.org](https://edri.org/)                                   |          80 |                   7.7% |                13.7% | **<ins>30.7%</ins>** |                12.3% |          8.2% |               12.8% |
| [home.cern](https://home.cern/)                                 |         151 |                  37.1% | **<ins>46.4%</ins>** |                40.1% |                38.9% |         39.4% |               40.2% |
| [leanpub.com](https://leanpub.com/)                             |         372 |                   1.2% |                 8.6% |                 6.9% | **<ins>85.6%</ins>** |          1.9% |                5.7% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.9% | **<ins>24.3%</ins>** |                23.2% |                24.2% |         20.2% |               23.9% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.6% |                -2.6% |                 0.3% |          0.2% | **<ins>1.5%</ins>** |
| [css-tricks.com](https://css-tricks.com/)                       |         154 |                   9.1% |                22.3% | **<ins>26.3%</ins>** |                12.2% |          9.2% |               12.3% |
| [un.org](https://un.org/en/)                                    |         150 |                  14.3% |                22.7% | **<ins>41.6%</ins>** |                20.1% |         15.3% |               17.6% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         152 |                  13.2% |                17.8% | **<ins>64.0%</ins>** |                16.9% |         13.8% |               17.5% |
| [eff.org](https://eff.org/)                                     |          56 |                   8.3% | **<ins>13.9%</ins>** |                11.8% |                12.7% |         10.8% |               12.6% |
| [sitepoint.com](https://sitepoint.com/)                         |         235 |                   0.7% | **<ins>10.0%</ins>** |                 9.6% |                 6.1% |          1.0% |                5.6% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         703 |                   0.8% |  **<ins>6.9%</ins>** |                 6.0% |                 4.7% |          1.3% |                6.2% |
| [weather.com](https://weather.com/)                             |        1061 |                   0.2% |  **<ins>8.4%</ins>** |                 7.8% |                 8.0% |          0.5% |                8.2% |
| [github.com](https://github.com/)                               |         549 |                   3.0% | **<ins>17.2%</ins>** |                16.6% |                 7.3% |          5.8% |                6.3% |
| [faz.net](https://faz.net/aktuell/)                             |        1394 |                   3.2% |                 5.5% | **<ins>10.6%</ins>** |                 4.4% |          3.6% |                4.5% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7308 |                   8.5% | **<ins>11.1%</ins>** |                 9.3% |                 9.4% |          9.2% |               10.9% |
| **Avg. minify rate**                                            |             |               **9.0%** |            **15.4%** |            **20.5%** |            **16.3%** |     **10.2%** |           **12.7%** |

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
