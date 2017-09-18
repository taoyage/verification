/*
 * @Author: accord
 * @Date:   2017-09-12 12:50:00
 * @Last Modified by:   accord
 * @Last Modified time: 2017-09-18 11:14:09
 */

var webpack = require('webpack');
var path = require('path');
var libraryName = 'verification';
var outputFile = libraryName + '.js';

var config = {
    entry: __dirname + '/src/verification.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [{
            test: /(\.jsx|\.js)$/,
            loader: 'babel',
            exclude: /(node_modules|bower_components)/
        }, {
            test: /(\.jsx|\.js)$/,
            loader: "eslint-loader",
            exclude: /node_modules/
        }]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    }
};

module.exports = config;