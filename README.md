# HTML Minifiers Benchmark

Updated: 2025-08-11

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/2.1.2

| Website | Source (KB) | [html-minifier-terser] | [htmlnano] |
| ------- | ----------: | ---------------------: | ---------: |
| [stackoverflow.blog](https://stackoverflow.blog/) | 342 | 1.7% | 4.1% |
| [github.com](https://github.com/) | 541 | 3.7% | 18.1% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page) | 223 | 4.6% | 4.9% |
| [npmjs.com](https://www.npmjs.com/package/eslint) | 459 | 0.5% | 0.9% |
| [tc39.es](https://tc39.es/ecma262/) | 7198 | 8.6% | 8.7% |
| [reddit.com](https://reddit.com/) | 186 | -0.0% | 1.6% |
| [apple.com](https://www.apple.com/) | 190 | 7.6% | 12.3% |
| [weather.com](https://weather.com) | 1773 | 0.2% | 12.1% |
| **Avg. minify rate** | 0% | **3.4%** | **7.8%** |

## Benchmark

```bash
npm install --omit=dev
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
