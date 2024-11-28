# 需求

实现一个函数同时支持自定义指令 和 hook 监听dom变化

5w3h 八何分析法
1. 如何监听dom变化

``` new ResizeObserver ```
2. 如何用vite打包

```js
1. vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts', //入口文件
      name: 'useResize',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        globals: {
            useResize: 'useResize',
        },
      },
    },
  },
}) 

2.package.json

{
  "name": "zl-v-resize",  // 包的名称
  "version": "1.0.0",
  "description": "",
  "main": "dist/v-resize.umd.js", // 依赖文件
  "module": "v-resize.mjs", // 依赖文件
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "vite build"   // 打包命令
  },
  "author": "lucidddream",
  "files": [   // 依赖文件
    "dist",
    "index.d.ts"
  ],
  "license": "ISC",
  "devDependencies": {
    "vite": "^6.0.1",
    "vue": "^3.5.13"
  }
}

```
3. 如何发布npm
<1> 建立声明文件 index.d.ts
<2> npm adduser npm publish


