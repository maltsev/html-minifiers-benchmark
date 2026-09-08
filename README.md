# HTML Minifiers Benchmarks

Updated: 2026-09-08

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/8.4.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.5.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.16.2

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |  [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | --------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          64 |                   6.8% |                11.0% | **<ins>35.9%</ins>** |     10.3% |          8.0% |               11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         115 |                  39.1% |                43.0% | **<ins>50.2%</ins>** |     41.3% |         41.3% |               41.8% |
| [css-tricks.com](https://css-tricks.com/)                       |         174 |                    N/A |                15.6% | **<ins>27.8%</ins>** |     13.7% |          8.5% |               14.5% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |                 0.3% |      0.3% |          0.2% | **<ins>1.5%</ins>** |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         247 |                   4.7% |                 7.7% |  **<ins>9.8%</ins>** |      6.0% |          6.1% |                6.3% |
| [mastodon.social](https://mastodon.social/explore)              |          65 |                   4.2% | **<ins>13.0%</ins>** | **<ins>13.0%</ins>** |      5.7% |          7.8% |                9.0% |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                12.9% | **<ins>32.9%</ins>** |     12.2% |          7.9% |               12.6% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         134 |                   4.1% |                 7.0% |  **<ins>7.7%</ins>** |      4.6% |          5.0% |                5.6% |
| [w3.org](https://w3.org/)                                       |          50 |                  18.9% | **<ins>24.6%</ins>** |                24.2% |     24.3% |         20.3% |               24.0% |
| [leanpub.com](https://leanpub.com/)                             |         473 |                   1.2% | **<ins>10.4%</ins>** |                10.2% |      5.3% |          1.7% |                5.8% |
| [un.org](https://un.org/en/)                                    |         153 |                  14.2% |                22.2% | **<ins>44.6%</ins>** |     19.9% |         15.1% |               17.4% |
| [apple.com](https://apple.com/)                                 |         249 |                   5.9% |  **<ins>9.6%</ins>** |                 9.3% |      7.6% |          6.7% |                6.9% |
| [home.cern](https://home.cern/)                                 |         291 |                    N/A |                13.0% | **<ins>25.5%</ins>** |      8.0% |          4.7% |               10.2% |
| [weather.com](https://weather.com/)                             |         355 |                   0.4% |                 8.3% |  **<ins>9.1%</ins>** |      6.4% |          0.6% |                6.7% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         169 |                  20.0% |                24.7% | **<ins>65.3%</ins>** |     23.8% |         20.6% |               24.4% |
| [eff.org](https://eff.org/)                                     |          53 |                   8.8% |                15.5% | **<ins>15.9%</ins>** |     13.4% |         11.3% |               13.3% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         678 |                   0.8% |  **<ins>7.1%</ins>** |                 6.7% |      4.6% |          1.2% |                6.3% |
| [github.com](https://github.com/)                               |         562 |                   1.4% | **<ins>15.5%</ins>** | **<ins>15.5%</ins>** |      5.2% |          4.0% |                4.5% |
| [faz.net](https://faz.net/aktuell/)                             |        1570 |                   3.5% |                10.9% | **<ins>16.0%</ins>** |      4.6% |          3.7% |                8.7% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7447 |                   5.7% |                 8.2% |  **<ins>8.3%</ins>** |      6.6% |          6.2% |                7.9% |
| **Avg. minify rate**                                            |             |               **8.0%** |            **14.0%** |            **20.8%** | **11.2%** |      **9.3%** |           **11.9%** |

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
