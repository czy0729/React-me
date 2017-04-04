/**
 * 
 * @Date: 2017-04-04 04:57:40
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-04-05 02:12:04
 */
'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const ENV = process.env['WEBPACK_ENV'];
const __DEV__ = ENV === 'development';

const config = {
    entry: {
        index: './src',
    },
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: './[name].bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: [
                path.resolve(__dirname, './src'),
            ],
            loader: 'babel-loader',
            query: {
                presets: ['react-native'],
                plugins: ['transform-decorators-legacy'],
            },
        }, {
            test: /\.png|\.jpg/,
            loader: 'file-loader',
        }]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, './src/libs'),
        ],
        extensions: ['.jsx', '.web.js', '.js', '.json'],
        alias: {},
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(__DEV__),
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './index.html'),
        }),
    ],
    devServer: {
        port: 8080,
        historyApiFallback: true,
        quiet: false,
        noInfo: false,
        filename: '[name].bundle.js',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        publicPath: '/',
        stats: {
            colors: true
        },
    },
};

module.exports = config;