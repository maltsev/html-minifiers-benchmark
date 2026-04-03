# HTML Minifiers Benchmarks

Updated: 2026-04-03

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
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.5% | **<ins>34.5%</ins>** |     11.1% |          8.7% |               11.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         227 |                   4.5% |                 7.3% |                  N/A |      6.0% |          5.9% |                6.2% |
| [css-tricks.com](https://css-tricks.com/)                       |         170 |                   8.2% |                23.0% | **<ins>28.9%</ins>** |     13.4% |          8.7% |               13.9% |
| [github.com](https://github.com/)                               |         551 |                   3.0% | **<ins>17.4%</ins>** |                16.6% |      7.3% |          5.8% |                6.4% |
| [edri.org](https://edri.org/)                                   |          83 |                   7.4% |                13.4% | **<ins>32.4%</ins>** |     12.1% |          7.9% |               12.5% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [home.cern](https://home.cern/)                                 |         151 |                  37.1% | **<ins>46.3%</ins>** |                40.2% |     38.9% |         39.4% |               40.3% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.1% | **<ins>14.9%</ins>** |                14.7% |      5.8% |          5.2% |                7.2% |
| [leanpub.com](https://leanpub.com/)                             |         344 |                   1.2% |  **<ins>8.7%</ins>** |                 7.0% |      5.2% |          1.9% |                5.6% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         141 |                   3.8% |  **<ins>7.2%</ins>** |                 6.9% |      4.3% |          4.5% |                5.1% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         156 |                  13.3% |                17.8% | **<ins>62.8%</ins>** |     16.9% |         13.9% |               17.5% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         110 |                  38.1% |                41.8% | **<ins>52.9%</ins>** |     40.3% |         40.2% |               40.7% |
| [w3.org](https://w3.org/)                                       |          50 |                  19.1% | **<ins>24.6%</ins>** |                23.4% |     24.5% |         20.5% |               24.2% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         673 |                   0.8% |  **<ins>7.5%</ins>** |                 5.8% |      4.5% |          1.2% |                6.7% |
| [sitepoint.com](https://sitepoint.com/)                         |         235 |                   0.7% | **<ins>10.1%</ins>** |                 9.6% |      6.2% |          1.0% |                5.6% |
| [un.org](https://un.org/en/)                                    |         152 |                  14.2% |                22.5% | **<ins>41.3%</ins>** |     20.0% |         15.1% |               17.4% |
| [eff.org](https://eff.org/)                                     |          53 |                   8.9% | **<ins>15.0%</ins>** |                11.1% |     13.6% |         11.5% |               13.5% |
| [apple.com](https://apple.com/)                                 |         248 |                   4.8% |  **<ins>8.6%</ins>** |                 7.6% |      6.5% |          5.5% |                6.0% |
| [faz.net](https://faz.net/aktuell/)                             |        1437 |                   3.3% |                 6.6% | **<ins>11.5%</ins>** |      4.4% |          3.6% |                4.5% |
| [weather.com](https://weather.com/)                             |        2425 |                   0.1% |  **<ins>9.0%</ins>** |                 8.8% |      8.8% |          0.2% |                8.9% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7354 |                   8.5% | **<ins>11.1%</ins>** |                 9.3% |      9.4% |          9.2% |               10.9% |
| **Avg. minify rate**                                            |             |               **9.0%** |            **15.9%** |            **21.1%** | **12.7%** |     **10.2%** |           **13.0%** |

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
