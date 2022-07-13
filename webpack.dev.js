const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin')
const dotenv = require('dotenv').config()

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    module: {
        rules: [
        {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
    //     {
    //       test: REGEX_TO_MATCH_FILES ex. /\.js$/,
    //       exclude: /node_modules/,
    //       loader: '',
    //     }
    //    
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new webpack.DefinePlugin({
            API_KEY: JSON.stringify(process.env.API_KEY)
            }),
            new WorkboxPlugin.GenerateSW(),
        // TODO: configure workbox-webpack-plugin
    ]
}
