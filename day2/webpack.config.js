'use strict';

const path = require('path');
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('./node_modules/vue-loader/lib/plugin')

// wpstart
module.exports = {
    // target: 'node',
    // externals: [nodeExternals()],
    entry: './src/main.js',
    context: path.join(__dirname),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
        // baseUrl: './',
        // publicPath: 'pathOrUrlWhenProductionBuild'
    },
    devServer: {
        // contentBase: "src", //运行目录
        open: true,
        hot: true,
        // port: 3000,
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }, // 处理 less 文件的 loader
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            }, // 处理 字体文件的 loader 
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'
            }, // 处理 图片路径的 loader
            // limit 给定的值，是图片的大小，单位是 byte， 如果引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }, // 处理 .vue 文件的 loader
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties']
                    },
                },
                exclude: /node_modules/, // 排除此目录下
                // include: , //包含此目录
            }
        ]
    },
    resolve: {
        // alias: {
        //     // 修改Vue倍导入时包的路径
        //     "vue$": "vue/dist/vue.js"
        // }
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery'
        })
    ],

};