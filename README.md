# HTML Minifiers Benchmarks

Updated: 2026-08-14

This benchmark measures how well different tools minify real-world HTML pages.
For every URL, the page is fetched and the same source HTML is passed to each minifier.
Each minifier is run with aggressive settings, including CSS/JS/SVG optimization when supported.
Results are reported as minification rate (percentage size reduction vs the original HTML).
Higher is better.

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/7.5.3
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.4.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1
[swc-html]: https://www.npmjs.com/package/@swc/html/v/1.15.47

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] |           [htmlnano] |            [minify] | [minify-html] |          [swc-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | -------------------: | ------------------: | ------------: | ------------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   6.9% |                11.1% | **<ins>34.4%</ins>** |               10.3% |          8.1% |               11.0% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         114 |                  39.2% |                43.1% | **<ins>53.4%</ins>** |               41.4% |         41.3% |               41.8% |
| [css-tricks.com](https://css-tricks.com/)                       |         170 |                    N/A |                15.7% |                27.8% |               13.8% |          8.9% |               14.5% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |           1 |                   4.9% |                 5.8% |                 5.1% | **<ins>8.0%</ins>** |          7.5% |                7.5% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         135 |                   4.1% |  **<ins>6.9%</ins>** |                 6.6% |                4.5% |          4.9% |                5.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         251 |                   4.6% |  **<ins>7.6%</ins>** |                 7.1% |                5.9% |          6.0% |                6.3% |
| [edri.org](https://edri.org/)                                   |          84 |                   7.4% |                12.9% | **<ins>32.3%</ins>** |               12.2% |          7.9% |               12.6% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         151 |                  -3.9% |                 0.6% |                -2.6% |                0.3% |          0.2% | **<ins>1.5%</ins>** |
| [mastodon.social](https://mastodon.social/explore)              |          54 |                   3.9% | **<ins>13.5%</ins>** |                13.4% |                5.8% |          7.2% |                8.6% |
| [apple.com](https://apple.com/)                                 |         248 |                   6.0% |  **<ins>9.6%</ins>** |                 8.7% |                7.6% |          6.7% |                6.9% |
| [eff.org](https://eff.org/)                                     |          54 |                   8.7% | **<ins>15.3%</ins>** |                10.9% |               13.3% |         11.2% |               13.2% |
| [w3.org](https://w3.org/)                                       |          50 |                  19.0% | **<ins>24.5%</ins>** |                23.4% |               24.4% |         20.4% |               24.1% |
| [un.org](https://un.org/en/)                                    |         154 |                  14.1% |                22.0% | **<ins>40.9%</ins>** |               19.8% |         15.0% |               17.3% |
| [weather.com](https://weather.com/)                             |         339 |                   0.5% |  **<ins>8.5%</ins>** |                 6.5% |                6.5% |          0.6% |                6.8% |
| [leanpub.com](https://leanpub.com/)                             |         351 |                   1.2% |  **<ins>8.5%</ins>** |                 6.7% |                4.8% |          1.8% |                5.3% |
| [bbc.co.uk](https://bbc.co.uk/)                                 |         735 |                   0.8% |  **<ins>7.1%</ins>** |                 6.0% |                4.8% |          1.2% |                6.3% |
| [github.com](https://github.com/)                               |         559 |                   1.4% | **<ins>15.6%</ins>** |                14.9% |                5.2% |          4.1% |                4.6% |
| [faz.net](https://faz.net/aktuell/)                             |        1579 |                   3.4% |                10.7% | **<ins>15.5%</ins>** |                4.6% |          3.7% |                8.6% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7413 |                   5.7% |  **<ins>8.2%</ins>** |                 6.6% |                6.7% |          6.2% |                8.0% |
| **Avg. minify rate**                                            |             |               **7.1%** |            **12.9%** |            **16.1%** |           **10.3%** |      **8.6%** |           **10.9%** |

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
