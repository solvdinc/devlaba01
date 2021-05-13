const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'script/[name].js',
    path: path.resolve(__dirname, 'dist/'),
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: "assets" },
      ],
    }),
    new MiniCssExtractPlugin(),
    new webpack.EnvironmentPlugin({
      VERSION: '1.0.0',
    }),
    new HtmlWebpackPlugin({
      template: 'src/main-cv-page.pug',
      filename: 'cv.html',
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: 'src/additional-page.pug',
      filename: 'additional-page.html',
      hash: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"]
      },
      {
        test: /\.s[ca]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};