"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_vue_1 = __importDefault(require("@vitejs/plugin-vue"));
const vite_2 = __importDefault(require("unplugin-auto-import/vite"));
const postcss_px_to_viewport_1 = __importDefault(require("postcss-px-to-viewport"));
const vite_3 = __importDefault(require("unocss/vite"));
const unocss_1 = require("unocss");
const vite_plugin_pwa_1 = require("vite-plugin-pwa");
// 在这里使用环境变量
// https://vite.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_vue_1.default)(), (0, vite_plugin_pwa_1.VitePWA)({
            workbox: {
                cacheId: "zl", //缓存名称
                runtimeCaching: [
                    {
                        urlPattern: /.*\.js.*/, //缓存文件
                        handler: "StaleWhileRevalidate", //重新验证时失效
                        options: {
                            cacheName: "zl-js", //缓存js，名称
                            expiration: {
                                maxEntries: 30, //缓存文件数量 LRU算法
                                maxAgeSeconds: 30 * 24 * 60 * 60 //缓存有效期
                            }
                        }
                    }
                ]
            },
        }), (0, vite_2.default)({
            imports: ['vue'],
            dts: 'src/auto-import.d.ts'
        }),
        (0, vite_3.default)({
            rules: [
                ['flex', { display: "flex" }],
                ['pink', { color: "pink" }],
                [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) * 10}px` })]
            ],
            presets: [(0, unocss_1.presetIcons)(), (0, unocss_1.presetAttributify)(), (0, unocss_1.presetUno)()] // 引入presetIcons 预设图标 presetAttributify tailwind
        })
    ],
    css: {
        postcss: {
            plugins: [
                (0, postcss_px_to_viewport_1.default)({
                    unitToConvert: 'px', // 要转化的单位
                    viewportWidth: 750, // UI设计稿的宽度
                    unitPrecision: 2, // 转换后的精度，即小数点位数
                    propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
                    viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
                    fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
                    selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
                    minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
                    mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
                    replace: true, // 是否转换后直接更换属性值
                    landscape: false // 是否处理横屏情况
                })
            ]
        }
    }
});
