# HTML Minifiers Benchmark

[html-minifier-terser@6.0.2]: https://www.npmjs.com/package/html-minifier-terser
[htmlnano@1.1.1]: https://www.npmjs.com/package/htmlnano

| Website                                                     | Source (KB) | [html-minifier-terser@6.0.2] | [htmlnano@1.1.1] |
| ----------------------------------------------------------- | ----------: | ---------------------------: | ---------------: |
| [stackoverflow.blog](https://stackoverflow.blog/)           |          90 |                           82 |               76 |
| [github.com](https://github.com/)                           |         232 |                          203 |              173 |
| [en.wikipedia.org](https://en.wikipedia.org/wiki/Main_Page) |          81 |                           76 |               75 |
| [npmjs.com](https://www.npmjs.com/features)                 |          43 |                           40 |               38 |
| [tc39.es](https://tc39.es/ecma262/)                         |        6001 |                         5465 |             5459 |
| **Avg. minify rate**                                        |          0% |                       **9%** |          **13%** |

## Benchmark

```
npm install --production
npm run benchmark
```

After that `README.md` will be updated with the new benchmark data.

> README.md is generated dynamically from README.template.md. So don't alter it.
