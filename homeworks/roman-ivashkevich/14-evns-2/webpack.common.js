const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    main: './src/index.js',
    about: './src/about.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/about.pug',
      filename: 'about.html',
      inject: true,
      chunks: ['about'],
    }),
    new CopyPlugin({
      patterns: [{ from: './src/assets', to: 'assets' }],
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: 'babel-loader',
      },
      {
        test: /\.s[ca]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.pug$/i,
        use: ['pug-loader'],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
};
