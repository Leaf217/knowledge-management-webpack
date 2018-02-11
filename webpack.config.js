// const path = require('path');
// const webpack = require('webpack');

module.exports = {
    entry:  "./src/main.js",

    output: {
        path: __dirname + "/dist/js",
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: "../images/",//图片输出路径，dist/images,当前目录是在dist/js
                        publicPath: 'dist/', //如果不加这个，在打包的过程中，会直接在本项目的根目录下寻找images文件夹，404 not found
                    }
                }]

            }
            ]
    }
};