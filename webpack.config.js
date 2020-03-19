/**
 * Webpack configuration file
 * @author Adi Davidovich
 * LAST CHANGE: 18/03/2020
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './app/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'startpage-bundle.js'
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
        })
    ]
};
