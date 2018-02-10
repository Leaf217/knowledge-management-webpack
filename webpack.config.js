// const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry:  "./src/main.js",

    // devtool: 'inline-source-map',

    devServer: {
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        // historyApiFallback: true, //不跳转
        // inline: true //实时刷新
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader?limit=8192'
                ]
            }
            ]
    },

    output: {
        path: __dirname + "/dist/js",
        publicPath: "/dist/js",
        filename: "bundle.js"
    },
};