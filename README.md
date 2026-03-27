# HTML Minifiers Benchmarks

Updated: 2026-03-27

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/5.2.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.2.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.21

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         107 |                  38.1% |                41.9% | **<ins>53.2%</ins>** |     40.3% |         40.2% |               40.8% |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.5% | **<ins>34.5%</ins>** |     11.1% |          8.7% |               11.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         230 |                   4.4% |  **<ins>7.2%</ins>** |                 7.1% |      6.0% |          5.9% |                6.2% |
| [github.com](https://github.com/)                               |         553 |                   3.1% | **<ins>17.5%</ins>** |                16.7% |      7.3% |          5.9% |                6.5% |
| [edri.org](https://edri.org/)                                   |          80 |                   7.7% |                13.7% | **<ins>30.7%</ins>** |     12.3% |          8.2% |               12.8% |
| [home.cern](https://home.cern/)                                 |         151 |                  37.1% | **<ins>46.4%</ins>** |                40.2% |     38.9% |         39.5% |               40.3% |
| [css-tricks.com](https://css-tricks.com/)                       |         170 |                   8.4% |                23.1% | **<ins>29.1%</ins>** |     13.6% |          8.8% |               14.1% |
| [leanpub.com](https://leanpub.com/)                             |         359 |                   1.2% |  **<ins>8.9%</ins>** |                 7.1% |      5.4% |          1.9% |                5.9% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         141 |                   3.8% |  **<ins>7.2%</ins>** |                 6.9% |      4.3% |          4.5% |                5.1% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7318 |                   8.5% | **<ins>11.1%</ins>** |                 9.3% |      9.4% |          9.2% |               10.9% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.1% | **<ins>14.9%</ins>** |                14.7% |      5.8% |          5.2% |                7.2% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         155 |                  13.2% |                17.8% | **<ins>63.1%</ins>** |     16.9% |         13.8% |               17.4% |
| [w3.org](https://w3.org/)                                       |          50 |                  18.9% | **<ins>24.5%</ins>** |                23.3% |     24.4% |         20.3% |               24.1% |
| [eff.org](https://eff.org/)                                     |          53 |                   8.9% | **<ins>14.9%</ins>** |                11.0% |     13.6% |         11.6% |               13.5% |
| [apple.com](https://apple.com/)                                 |         230 |                   8.6% | **<ins>13.3%</ins>** |                11.4% |     10.3% |          9.5% |                9.8% |
| [faz.net](https://faz.net/aktuell/)                             |        1408 |                   3.2% |                 6.6% | **<ins>11.7%</ins>** |      4.3% |          3.5% |                4.5% |
| [un.org](https://un.org/en/)                                    |         151 |                  14.3% |                22.6% | **<ins>41.5%</ins>** |     20.1% |         15.3% |               17.5% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         719 |                   0.8% |  **<ins>7.3%</ins>** |                 5.8% |      4.6% |          1.2% |                6.6% |
| [weather.com](https://weather.com/)                             |        2090 |                   0.1% |  **<ins>8.8%</ins>** |                 8.7% |      8.7% |          0.2% | **<ins>8.8%</ins>** |
| [sitepoint.com](https://sitepoint.com/)                         |         234 |                   0.7% | **<ins>10.1%</ins>** |                 9.6% |      6.2% |          1.0% |                5.6% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| **Avg. minify rate**                                            |             |               **8.9%** |            **15.7%** |            **20.6%** | **12.6%** |     **10.2%** |           **12.9%** |

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
