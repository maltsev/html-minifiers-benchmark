# HTML Minifiers Benchmark

Updated: 2025-08-08

[html-minifier-terser]: https://www.npmjs.com/package/html-minifier-terser/v/7.2.0
[htmlnano]: https://www.npmjs.com/package/htmlnano/v/2.1.2

| Website | Source (KB) | [html-minifier-terser] | [htmlnano] |
| ------- | ----------: | ---------------------: | ---------: |
| [stackoverflow.blog](https://stackoverflow.blog/) | 343 | 1.7% | 3.6% |
| [github.com](https://github.com/) | 541 | 3.6% | 17.5% |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page) | 223 | 4.6% | 4.9% |
| [npmjs.com](https://www.npmjs.com/package/eslint) | 459 | 0.5% | 0.9% |
| [tc39.es](https://tc39.es/ecma262/) | 7198 | 8.6% | 8.7% |
| [reddit.com](https://reddit.com/) | 622 | 4.8% | 5.7% |
| [apple.com](https://www.apple.com/) | 190 | 7.6% | 12.0% |
| [weather.com](https://weather.com) | 1821 | 0.2% | 13.2% |
| **Avg. minify rate** | 0% | **4.0%** | **8.3%** |

## Benchmark

```bash
npm install --omit=dev
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
