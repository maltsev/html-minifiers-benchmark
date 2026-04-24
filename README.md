# HTML Minifiers Benchmarks

Updated: 2026-04-24

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/6.1.3
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.2.1
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.30

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         110 |                  38.1% |                41.8% | **<ins>52.8%</ins>** |     40.2% |         40.1% |               40.7% |
| [alistapart.com](https://alistapart.com/)                       |          64 |                   7.5% |                11.4% | **<ins>34.0%</ins>** |     10.9% |          8.6% |               11.3% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.1% | **<ins>14.9%</ins>** |                14.7% |      5.8% |          5.2% |                7.2% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         140 |                   3.8% |  **<ins>7.3%</ins>** |                 6.9% |      4.4% |          4.5% |                5.1% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.9% | **<ins>24.4%</ins>** |                23.2% |     24.3% |         20.3% |               24.0% |
| [css-tricks.com](https://css-tricks.com/)                       |         166 |                   8.8% |                17.0% | **<ins>28.8%</ins>** |     14.7% |          9.2% |               15.8% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         228 |                   4.5% |  **<ins>7.4%</ins>** |                 7.2% |      6.1% |          6.0% |                6.3% |
| [leanpub.com](https://leanpub.com/)                             |         333 |                   1.3% |  **<ins>9.4%</ins>** |                 7.0% |      5.1% |          2.0% |                5.5% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [edri.org](https://edri.org/)                                   |          83 |                   7.4% |                13.4% | **<ins>32.4%</ins>** |     12.1% |          7.9% |               12.6% |
| [home.cern](https://home.cern/)                                 |         151 |                  37.0% | **<ins>46.3%</ins>** |                40.1% |     38.8% |         39.3% |               40.2% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         154 |                  13.2% |                17.7% | **<ins>63.3%</ins>** |     16.8% |         13.8% |               17.4% |
| [un.org](https://un.org/en/)                                    |         152 |                  14.2% |                22.5% | **<ins>41.2%</ins>** |     19.9% |         15.1% |               17.4% |
| [apple.com](https://apple.com/)                                 |         240 |                   6.0% |  **<ins>9.8%</ins>** |                 8.7% |      7.6% |          6.6% |                7.1% |
| [eff.org](https://eff.org/)                                     |          54 |                   8.8% | **<ins>15.5%</ins>** |                11.0% |     13.4% |         11.3% |               13.3% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         645 |                   0.8% |  **<ins>7.5%</ins>** |                 5.9% |      4.5% |          1.2% |                6.6% |
| [sitepoint.com](https://sitepoint.com/)                         |         233 |                   0.7% | **<ins>10.1%</ins>** |                 9.7% |      6.2% |          1.0% |                5.6% |
| [github.com](https://github.com/)                               |         553 |                   3.0% | **<ins>17.4%</ins>** |                16.5% |      7.3% |          5.8% |                6.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1402 |                   3.2% |                 6.7% | **<ins>11.7%</ins>** |      4.3% |          3.5% |                4.5% |
| [weather.com](https://weather.com/)                             |        2300 |                   0.1% |  **<ins>9.1%</ins>** |                 8.9% |      9.0% |          0.2% | **<ins>9.1%</ins>** |
| [tc39.es](https://tc39.es/ecma262/)                             |        7206 |                   5.8% |  **<ins>8.2%</ins>** |                 6.7% |      6.7% |          6.3% |                8.0% |
| **Avg. minify rate**                                            |             |               **8.7%** |            **15.2%** |            **20.4%** | **12.3%** |      **9.9%** |           **12.6%** |

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
