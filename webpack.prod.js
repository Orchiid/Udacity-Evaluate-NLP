const HtmlWebPackPlugin = require('html-webpack-plugin');
const  MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin')
module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
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
    //    *
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new WorkboxPlugin.GenerateSW(),
        // TODO: configure workbox-webpack-plugin
    ],
    optimization: {
        // TODO: Add Optimization for JS and CSS
    }
}
