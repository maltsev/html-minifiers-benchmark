# HTML Minifiers Benchmarks

Updated: 2026-04-18

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/6.1.2
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.2.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.26

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.5% | **<ins>34.5%</ins>** |     11.1% |          8.7% |               11.5% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         108 |                  38.1% |                41.8% | **<ins>53.1%</ins>** |     40.3% |         40.2% |               40.7% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         223 |                   4.6% |  **<ins>7.4%</ins>** |                 7.3% |      6.1% |          6.0% |                6.3% |
| [github.com](https://github.com/)                               |         551 |                   3.0% | **<ins>17.4%</ins>** |                16.6% |      7.3% |          5.8% |                6.4% |
| [edri.org](https://edri.org/)                                   |          83 |                   7.4% |                13.4% | **<ins>32.4%</ins>** |     12.1% |          7.9% |               12.6% |
| [home.cern](https://home.cern/)                                 |         151 |                  37.0% | **<ins>46.3%</ins>** |                40.1% |     38.8% |         39.4% |               40.2% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         140 |                   3.8% |  **<ins>7.3%</ins>** |                 6.9% |      4.4% |          4.6% |                5.2% |
| [leanpub.com](https://leanpub.com/)                             |         339 |                   1.2% |  **<ins>9.8%</ins>** |                 7.4% |      5.6% |          1.9% |                6.0% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.1% | **<ins>14.9%</ins>** |                14.7% |      5.8% |          5.2% |                7.2% |
| [apple.com](https://apple.com/)                                 |         242 |                   5.9% |  **<ins>9.8%</ins>** |                 8.7% |      7.6% |          6.7% |                7.1% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         155 |                  13.2% |                17.8% | **<ins>63.3%</ins>** |     16.9% |         13.9% |               17.5% |
| [eff.org](https://eff.org/)                                     |          52 |                   9.0% | **<ins>16.0%</ins>** |                11.2% |     13.8% |         11.6% |               13.6% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.9% | **<ins>24.4%</ins>** |                23.2% |     24.3% |         20.2% |               24.0% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         690 |                   0.8% |  **<ins>7.4%</ins>** |                 5.8% |      4.6% |          1.2% |                6.5% |
| [sitepoint.com](https://sitepoint.com/)                         |         223 |                   0.8% |  **<ins>9.7%</ins>** |                 9.3% |      6.3% |          1.0% |                5.7% |
| [un.org](https://un.org/en/)                                    |         152 |                  14.2% |                22.6% | **<ins>41.4%</ins>** |     20.0% |         15.1% |               17.4% |
| [weather.com](https://weather.com/)                             |        2036 |                   0.1% |  **<ins>8.9%</ins>** |                 8.6% |      8.7% |          0.3% |                8.8% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7205 |                   5.8% |  **<ins>8.2%</ins>** |                 6.7% |      6.7% |          6.3% |                8.0% |
| [faz.net](https://faz.net/aktuell/)                             |        1384 |                   3.3% |                 6.7% | **<ins>11.8%</ins>** |      4.4% |          3.5% |                4.5% |
| **Avg. minify rate**                                            |             |               **8.7%** |            **15.1%** |            **20.0%** | **12.2%** |     **10.0%** |           **12.5%** |

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
