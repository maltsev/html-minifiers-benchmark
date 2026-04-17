# HTML Minifiers Benchmarks

Updated: 2026-04-17

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

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |             [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | -------------------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.5% | **<ins>34.5%</ins>** |                11.1% |          8.7% |               11.5% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         110 |                  38.1% |                41.8% | **<ins>52.8%</ins>** |                40.2% |         40.1% |               40.7% |
| [leanpub.com](https://leanpub.com/)                             |         341 |                   1.2% |                 9.5% |                 7.2% | **<ins>87.4%</ins>** |          1.9% |                5.8% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         229 |                   4.5% |  **<ins>7.3%</ins>** |                 7.2% |                 6.1% |          5.9% |                6.2% |
| [mastodon.social](https://mastodon.social/explore)              |          34 |                   3.1% | **<ins>14.9%</ins>** |                14.7% |                 5.8% |          5.2% |                7.2% |
| [home.cern](https://home.cern/)                                 |         151 |                  37.1% | **<ins>46.3%</ins>** |                40.2% |                38.9% |         39.4% |               40.3% |
| [edri.org](https://edri.org/)                                   |          83 |                   7.4% |                13.4% | **<ins>32.4%</ins>** |                12.1% |          7.9% |               12.6% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         155 |                  13.2% |                17.8% | **<ins>63.3%</ins>** |                16.9% |         13.9% |               17.5% |
| [css-tricks.com](https://css-tricks.com/)                       |         170 |                   8.2% |                22.9% | **<ins>28.9%</ins>** |                13.4% |          8.6% |               13.9% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |                -2.6% |                 0.3% |          0.2% | **<ins>1.5%</ins>** |
| [eff.org](https://eff.org/)                                     |          53 |                   8.9% | **<ins>15.8%</ins>** |                11.1% |                13.6% |         11.5% |               13.5% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         141 |                   3.8% |  **<ins>7.3%</ins>** |                 6.9% |                 4.4% |          4.6% |                5.2% |
| [un.org](https://un.org/en/)                                    |         152 |                  14.2% |                22.5% | **<ins>41.3%</ins>** |                20.0% |         15.1% |               17.4% |
| [apple.com](https://apple.com/)                                 |         242 |                   5.9% |  **<ins>9.8%</ins>** |                 8.7% |                 7.6% |          6.7% |                7.1% |
| [w3.org](https://w3.org/)                                       |          51 |                  18.9% | **<ins>24.4%</ins>** |                23.2% |                24.3% |         20.2% |               24.0% |
| [sitepoint.com](https://sitepoint.com/)                         |         228 |                   0.7% |  **<ins>9.9%</ins>** |                 9.5% |                 6.2% |          1.0% |                5.6% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         640 |                   0.8% |  **<ins>7.5%</ins>** |                 5.9% |                 4.5% |          1.2% |                6.6% |
| [github.com](https://github.com/)                               |         551 |                   3.0% | **<ins>17.4%</ins>** |                16.6% |                 7.3% |          5.8% |                6.4% |
| [faz.net](https://faz.net/aktuell/)                             |        1407 |                   3.3% |                 6.7% | **<ins>11.7%</ins>** |                 4.4% |          3.6% |                4.5% |
| [weather.com](https://weather.com/)                             |        2034 |                   0.1% |  **<ins>8.9%</ins>** |                 8.6% |                 8.7% |          0.3% |                8.8% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7205 |                   5.8% |  **<ins>8.2%</ins>** |                 6.7% |                 6.7% |          6.3% |                8.0% |
| **Avg. minify rate**                                            |             |               **8.7%** |            **15.5%** |            **20.4%** |            **16.2%** |      **9.9%** |           **12.6%** |

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
