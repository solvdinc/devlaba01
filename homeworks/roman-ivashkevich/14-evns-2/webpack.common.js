const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    main: './src/js/index.js',
    about: './src/js/about.js',
    modalContent: './src/js/modal.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist/'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.pug',
      filename: 'index.html',
      hash: true,
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/about.pug',
      filename: 'about.html',
      hash: true,
      chunks: ['main', 'about'],
    }),
    new CopyPlugin({
      patterns: [{ from: './src/assets', to: 'assets' }],
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: 'babel-loader',
      },
      {
        test: /\.s[ca]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.pug$/i,
        use: ['pug-loader'],
      },
    ],
  },
};
