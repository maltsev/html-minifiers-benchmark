# HTML Minifiers Benchmark

Updated: 2025-08-07

[html-minifier-terser@7.2.0]: https://www.npmjs.com/package/html-minifier-terser
[htmlnano@2.1.2]: https://www.npmjs.com/package/htmlnano

| Website | Source (KB) | [html-minifier-terser@7.2.0] | [htmlnano@2.1.2] |
| ------- | ----------: | -----------------------------------------------------: | -------------------------------: |

| [stackoverflow.blog](https://stackoverflow.blog/) | 344 | 338 | 331 |
| [github.com](https://github.com/) | 540 | 521 | 446 |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page) | 220 | 210 | 209 |
| [npmjs.com](https://www.npmjs.com/features) | 55 | 51 | 51 |
| [tc39.es](https://tc39.es/ecma262/) | 7198 | 6579 | 6571 |
| **Avg. minify rate** | 0% | **5%** | **8%** |

## Benchmark

```
npm install --omit=dev
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
