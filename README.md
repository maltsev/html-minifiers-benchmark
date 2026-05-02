# HTML Minifiers Benchmarks

Updated: 2026-05-02

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/6.2.1
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.2.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.32

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.4% |                11.3% | **<ins>34.1%</ins>** |     10.8% |          8.6% |               11.3% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         113 |                  38.2% |                42.1% | **<ins>52.5%</ins>** |     40.4% |         40.3% |               40.8% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         225 |                   4.5% |  **<ins>7.4%</ins>** |                 7.3% |      6.1% |          6.0% |                6.3% |
| [leanpub.com](https://leanpub.com/)                             |         347 |                   1.2% |  **<ins>9.5%</ins>** |                 7.1% |      5.4% |          1.9% |                5.8% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         154 |                  13.2% |                17.7% | **<ins>63.3%</ins>** |     16.8% |         13.8% |               17.4% |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                13.4% | **<ins>32.3%</ins>** |     12.1% |          7.8% |               12.5% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [home.cern](https://home.cern/)                                 |         151 |                  36.9% | **<ins>46.2%</ins>** |                40.0% |     38.7% |         39.3% |               40.1% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         138 |                   3.8% |  **<ins>7.3%</ins>** |                 7.0% |      4.4% |          4.6% |                5.2% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.1% | **<ins>14.9%</ins>** |                14.7% |      5.8% |          5.2% |                7.2% |
| [eff.org](https://eff.org/)                                     |          54 |                   8.7% | **<ins>15.4%</ins>** |                10.8% |     13.2% |         11.2% |               13.1% |
| [w3.org](https://w3.org/)                                       |          50 |                  18.9% | **<ins>24.4%</ins>** |                23.2% |     24.3% |         20.3% |               24.0% |
| [apple.com](https://apple.com/)                                 |         245 |                   6.0% | **<ins>10.1%</ins>** |                 8.7% |      7.6% |          6.6% |                7.1% |
| [sitepoint.com](https://sitepoint.com/)                         |         235 |                   0.7% | **<ins>10.1%</ins>** |                 9.6% |      6.1% |          1.0% |                5.6% |
| [un.org](https://un.org/en/)                                    |         152 |                  14.2% |                22.6% | **<ins>41.3%</ins>** |     20.0% |         15.2% |               17.4% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         690 |                   0.8% |  **<ins>7.5%</ins>** |                 5.8% |      4.6% |          1.2% |                6.6% |
| [github.com](https://github.com/)                               |         554 |                   3.0% | **<ins>17.4%</ins>** |                16.6% |      7.3% |          5.8% |                6.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1385 |                   3.2% |                 6.7% | **<ins>11.8%</ins>** |      4.4% |          3.5% |                4.5% |
| [weather.com](https://weather.com/)                             |        2288 |                   0.1% |  **<ins>9.3%</ins>** |                 9.1% |      9.2% |          0.2% | **<ins>9.3%</ins>** |
| [tc39.es](https://tc39.es/ecma262/)                             |        7237 |                   5.7% |  **<ins>8.2%</ins>** |                 6.6% |      6.7% |          6.2% |                8.0% |
| **Avg. minify rate**                                            |             |               **8.7%** |            **15.1%** |            **20.0%** | **12.2%** |      **9.9%** |           **12.5%** |

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
