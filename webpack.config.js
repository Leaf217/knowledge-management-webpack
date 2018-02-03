// const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry:  __dirname + "/src/main.js",

    devtool: 'eval-source-map',

    devServer: {
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

    output: {
        path: __dirname + "/dist/js",
        filename: "bundle.js"
    },
};