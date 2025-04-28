"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
exports.default = (0, vite_1.defineConfig)({
    build: {
        lib: {
            entry: './src/index.ts',
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
});
