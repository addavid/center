/**
 * Webpack configuration file
 * @author Adi Davidovich
 * LAST CHANGE: 27/03/2020
 */
const path = require('path');
const MomentTimezoneDataPlugin = require('moment-timezone-data-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './app/index.js',
    mode: 'production', // change to development when debugging/developing
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'center-bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader' },
            { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
            { test: /\.woff2$/, loader: 'file-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
        }),
        new MomentLocalesPlugin({
            localesToKeep: ['en-il'] // To reduce moment-tz size
        }),
        new MomentTimezoneDataPlugin({
            matchZones: 'Asia/Jerusalem' // To reduce moment-tz size
        }),
        // new BundleAnalyzerPlugin() // (UNCOMMENT WHEN ANALYZING BUNDLE FILE)
    ]
};
