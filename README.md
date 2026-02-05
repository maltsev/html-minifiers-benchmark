# HTML Minifiers Benchmarks

Updated: 2026-02-05

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/5.0.3
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/3.1.0
[minify]: https://www.npmjs.com/package/@tdewolff/minify/v/2.24.8
[minify-html]: https://www.npmjs.com/package/@minify-html/node/v/0.18.1

| Website                                                         | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |  [minify] | [minify-html] |
| --------------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: | --------: | ------------: |
| [alistapart.com](https://alistapart.com/)                       |          63 |                   7.6% |                11.6% |      34.6% |     11.1% |          8.6% |
| [developer.mozilla.org](https://developer.mozilla.org/en-US/)   |         109 |                  37.9% |                41.7% |      52.7% |     40.1% |         39.9% |
| [leanpub.com](https://leanpub.com)                              |         242 |                   1.4% |                 7.0% |       6.4% |      6.1% |          1.2% |
| [mastodon.social](https://mastodon.social/explore)              |          37 |                   3.4% |                 6.8% |      14.6% |      5.9% |          3.6% |
| [stackoverflow.blog](https://stackoverflow.blog/)               |         140 |                   3.9% |                 5.7% |       7.0% |      4.6% |          4.7% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page)     |         219 |                   4.6% |                 7.5% |       7.4% |      6.2% |          2.9% |
| [apple.com](https://apple.com/)                                 |         236 |                   9.0% |                14.2% |      11.6% |     10.5% |          9.6% |
| [edri.org](https://edri.org)                                    |          80 |                   7.7% |                12.3% |      30.6% |     12.3% |          8.2% |
| [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/) |         149 |                  -3.9% |                 0.7% |      -2.6% |      0.3% |          0.2% |
| [home.cern](https://home.cern)                                  |         150 |                  37.1% |                46.3% |      40.2% |     38.9% |         39.4% |
| [un.org](https://un.org/en/)                                    |         151 |                  14.2% |                22.5% |      41.3% |     20.0% |         15.1% |
| [w3.org](https://w3.org/)                                       |          50 |                  19.1% |                24.7% |      23.5% |     24.6% |         20.4% |
| [lafrenchtech.gouv.fr](https://lafrenchtech.gouv.fr/)           |         152 |                  13.2% |                17.9% |      64.1% |     17.0% |         13.8% |
| [css-tricks.com](https://css-tricks.com)                        |         155 |                   9.0% |                13.6% |      26.2% |     12.2% |          9.1% |
| [eff.org](https://eff.org)                                      |          54 |                   8.7% |                14.5% |      10.8% |     13.3% |          9.6% |
| [bbc.co.uk](https://bbc.co.uk)                                  |         651 |                   0.8% |                 6.3% |       5.9% |      4.6% |          1.2% |
| [sitepoint.com](https://sitepoint.com)                          |         494 |                   0.8% |                 7.3% |      12.9% |      6.1% |          0.9% |
| [github.com](https://github.com/)                               |         546 |                   3.0% |                 9.7% |      16.7% |      7.3% |          5.7% |
| [faz.net](https://faz.net/aktuell/)                             |        1501 |                   3.4% |                 7.9% |      15.9% |      4.8% |          3.6% |
| [weather.com](https://weather.com)                              |        2393 |                   0.3% |                11.4% |      18.1% |     11.0% |          0.6% |
| [tc39.es](https://tc39.es/ecma262/)                             |        7254 |                   8.5% |                11.3% |       9.3% |      9.5% |          9.1% |
| **Avg. minify rate**                                            |             |               **9.0%** |            **14.3%** |  **21.3%** | **12.7%** |      **9.9%** |

New HTML minifiers are welcome!
Please submit a PR to add a new minifier to the benchmark, or open an issue to request it.

## Benchmark

```bash
npm install --omit=dev
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
