const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('./node_modules/vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    },
    devServer: {
        open: true,
        // contentBase: 'src', // server更新时的根目录
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // new 一个热更新模块,目的是启用热更新
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }), // new 一个根据指定的模板index页面生成一个内存中的页面,名字要一样.
        new VueLoaderPlugin()
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'] //用该样式右到左去匹配替换以.css结尾的文件
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.(jpg|png|gif|bmp|jpeg)$/,
            use: 'url-loader?limit=1024&name=[name].[ext]' //limit大于图片大小,则会填充base64,name=[name].[ext]表示引用原来的名字和后缀
        }, {
            test: /\.(ttf|eot|svg|woff|woff2)$/,
            use: 'url-loader'
        }, {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            use: 'vue-loader'
        }]
    }
}