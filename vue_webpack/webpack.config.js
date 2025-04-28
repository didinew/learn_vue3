const { Configuration } = require('webpack')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader') // vue
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinCssExtractPlugin = require('mini-css-extract-plugin') // 单独提取css
/***
 * @type {Configuration}
*/
const config = {
    mode: "development",
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, 'dist'), // 出口目录
        // filename: "main.js", // 出口文件
        filename: '[chunkhash].js', // 拆分js
        clean: true
    },
    stats: 'errors-only',
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MinCssExtractPlugin()
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                moment: {
                    name: "moment",
                    test: /[\\/]node_module[\\/]moment[\\/]/,
                    chunks: "all"
                },
                common: {
                    name: "common",
                    chunks: "all",
                    minChunks: 2
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [MinCssExtractPlugin.loader, 'css-loader'] // 从右向左解析
            },
            {
                test: /\.less$/,
                use: [MinCssExtractPlugin.loader, 'css-loader', 'less-loader'] // 从右向左解析
            }
        ]
    }
}

module.exports = config