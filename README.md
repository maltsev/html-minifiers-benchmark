# HTML Minifiers Benchmarks

Updated: 2026-03-11

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/5.2.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.2.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.18

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.5% | **<ins>34.5%</ins>** |     11.1% |          8.7% |               11.5% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         109 |                  37.9% |                41.6% | **<ins>52.7%</ins>** |     40.1% |         40.0% |               40.5% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         142 |                   3.8% |  **<ins>7.2%</ins>** |                 6.9% |      4.4% |          4.6% |                5.2% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         230 |                   4.5% |                 7.2% |                  N/A |      6.0% |          5.8% |                6.2% |
| [leanpub.com](https://leanpub.com/)                             |         361 |                   1.2% |  **<ins>8.6%</ins>** |                 6.8% |      5.1% |          1.9% |                5.5% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.1% | **<ins>14.9%</ins>** |                14.8% |      5.9% |          5.2% |                7.1% |
| [eff.org](https://eff.org/)                                     |          55 |                   9.0% | **<ins>14.4%</ins>** |                10.8% |     13.2% |         11.4% |               13.1% |
| [home.cern](https://home.cern/)                                 |         151 |                  37.2% | **<ins>46.5%</ins>** |                40.3% |     39.0% |         39.6% |               40.4% |
| [apple.com](https://apple.com/)                                 |         263 |                   8.0% | **<ins>12.2%</ins>** |                10.5% |      9.6% |          8.8% |                9.2% |
| [edri.org](https://edri.org/)                                   |          80 |                   7.7% |                13.7% | **<ins>30.7%</ins>** |     12.3% |          8.2% |               12.8% |
| [un.org](https://un.org/en/)                                    |         151 |                  14.3% |                22.6% | **<ins>41.5%</ins>** |     20.1% |         15.3% |               17.6% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.6% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         155 |                  13.2% |                17.8% | **<ins>63.2%</ins>** |     16.9% |         13.9% |               17.4% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.9% | **<ins>24.4%</ins>** |                23.2% |     24.3% |         20.3% |               24.0% |
| [css-tricks.com](https://css-tricks.com/)                       |         154 |                   8.9% |                22.2% | **<ins>26.1%</ins>** |     12.1% |          9.0% |               12.2% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         648 |                   0.8% |  **<ins>6.9%</ins>** |                 6.0% |      4.6% |          1.2% |                6.1% |
| [sitepoint.com](https://sitepoint.com/)                         |         232 |                   0.7% | **<ins>10.1%</ins>** |                 9.7% |      6.2% |          1.0% |                5.6% |
| [weather.com](https://weather.com/)                             |        1151 |                   0.2% |  **<ins>8.3%</ins>** |                 7.9% |      8.0% |          0.5% | **<ins>8.3%</ins>** |
| [github.com](https://github.com/)                               |         553 |                   3.0% | **<ins>17.5%</ins>** |                16.6% |      7.3% |          5.8% |                6.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1364 |                   3.3% |                 5.5% | **<ins>10.7%</ins>** |      4.5% |          3.6% |                4.5% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7305 |                   8.5% | **<ins>11.1%</ins>** |                 9.3% |      9.5% |          9.2% |               10.9% |
| **Avg. minify rate**                                            |             |               **9.2%** |            **15.9%** |            **21.0%** | **12.7%** |     **10.4%** |           **13.0%** |

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
