const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer')
const loader = require('sass-loader');

/** @type {import('webpack).Configuration} */
module.exports = {
    entry: {
        main:'./src/scripts/main.js',
        home: './src/scripts/home.js',
        portfolio: './src/scripts/portfolio.js'
    },

    output: {
        filename: 'scripts/[name].js',
        path: path.resolve(__dirname, 'dist/'),
        clean: true,
        assetModuleFilename: 'images/[name][ext]',
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/html/home.pug',
            filename: 'html/home.html',
            chunks: [ 'main','home']
        }),
        new HTMLWebpackPlugin({
            template: './src/html/portfolio.pug',
            filename: 'html/portfolio.html',
            chunks: [ 'main','portfolio']
        }),
        new MiniCssExtractPlugin({
            filename: 'style/[name].css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/i,
                use: 'pug-loader',
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.s[ca]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', { loader: 'postcss-loader', options: { postcssOptions: { plugins: [autoprefixer()] } } }, 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource',
            },
        ]
    }
}
