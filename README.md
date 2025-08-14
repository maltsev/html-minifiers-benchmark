# HTML Minifiers Benchmarks

Updated: 2025-08-14

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[html-minifier-next]: https://www.npmjs.com/package/html-minifier-next/v/1.1.5
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/2.1.2

| Website                                                     | Source (KB) | [html-minifier-terser] | [html-minifier-next] | [htmlnano] |
| ----------------------------------------------------------- | ----------: | ---------------------: | -------------------: | ---------: |
| [stackoverflow.blog](https://stackoverflow.blog/)           |         342 |                   1.7% |                 1.7% |       4.1% |
| [github.com](https://github.com/)                           |         541 |                   3.7% |                 3.7% |      18.1% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page) |         221 |                   4.6% |                 4.6% |       4.9% |
| [npmjs.com](https://www.npmjs.com/package/eslint)           |         459 |                   0.5% |                 0.5% |       0.9% |
| [tc39.es](https://tc39.es/ecma262/)                         |        7195 |                   8.6% |                 8.6% |       8.7% |
| [reddit.com](https://reddit.com/)                           |         186 |                   0.0% |                 0.0% |       1.6% |
| [apple.com](https://www.apple.com/)                         |         190 |                   7.6% |                 7.6% |      12.3% |
| [w3.org](https://www.w3.org/)                               |          48 |                  19.0% |                19.0% |      23.2% |
| [weather.com](https://weather.com)                          |        1770 |                   0.2% |                 0.2% |      12.1% |
| **Avg. minify rate**                                        |          0% |               **5.1%** |             **5.1%** |   **9.6%** |

## Benchmark

```bash
npm install --omit=dev
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
