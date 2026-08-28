# HTML Minifiers Benchmarks

Updated: 2026-08-28

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/8.3.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.4.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.1

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          64 |                   6.8% |                11.0% | **<ins>35.2%</ins>** |     10.3% |          8.0% |               11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         119 |                  39.0% |                42.8% | **<ins>52.8%</ins>** |     41.2% |         41.1% |               41.6% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         255 |                   4.6% |  **<ins>7.5%</ins>** |                 7.0% |      5.9% |          6.0% |                6.2% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |                -2.6% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [css-tricks.com](https://css-tricks.com/)                       |         175 |                    N/A |                15.5% |                27.4% |     13.7% |          8.5% |               14.4% |
| [leanpub.com](https://leanpub.com/)                             |         441 |                   1.1% |  **<ins>9.7%</ins>** |                 6.7% |      5.2% |          1.7% |                5.7% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         135 |                   4.1% |  **<ins>6.9%</ins>** |                 6.6% |      4.5% |          4.9% |                5.5% |
| [un.org](https://un.org/en/)                                    |         153 |                  14.2% |                22.2% | **<ins>41.2%</ins>** |     19.9% |         15.1% |               17.4% |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                12.9% | **<ins>32.3%</ins>** |     12.2% |          7.9% |               12.6% |
| [mastodon.social](https://mastodon.social/explore)              |          63 |                   4.1% | **<ins>13.1%</ins>** |                13.0% |      5.7% |          7.7% |                8.9% |
| [w3.org](https://w3.org/)                                       |          50 |                  18.9% | **<ins>24.6%</ins>** |                23.3% |     24.3% |         20.3% |               24.0% |
| [weather.com](https://weather.com/)                             |         362 |                   0.4% |  **<ins>8.3%</ins>** |                 6.4% |      6.4% |          0.6% |                6.6% |
| [apple.com](https://apple.com/)                                 |         251 |                   6.0% |  **<ins>9.7%</ins>** |                 8.7% |      7.6% |          6.7% |                6.9% |
| [eff.org](https://eff.org/)                                     |          52 |                   8.9% | **<ins>15.5%</ins>** |                11.1% |     13.5% |         11.4% |               13.4% |
| [home.cern](https://home.cern/)                                 |         290 |                    N/A |                13.0% |                23.2% |      8.1% |          4.7% |               10.2% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         757 |                   0.8% |  **<ins>7.1%</ins>** |                 5.9% |      4.7% |          1.2% |                6.3% |
| [github.com](https://github.com/)                               |         560 |                   1.4% | **<ins>15.5%</ins>** |                14.8% |      5.2% |          4.0% |                4.5% |
| [faz.net](https://faz.net/aktuell/)                             |        1621 |                   3.4% |                10.7% | **<ins>15.4%</ins>** |      4.6% |          3.7% |                8.7% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7413 |                   5.7% |  **<ins>8.2%</ins>** |                 6.6% |      6.7% |          6.2% |                8.0% |
| **Avg. minify rate**                                            |             |               **7.2%** |            **13.3%** |            **16.7%** | **10.5%** |      **8.6%** |           **11.1%** |

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
