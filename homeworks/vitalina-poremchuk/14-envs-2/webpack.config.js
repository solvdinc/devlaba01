const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: { main: "./src/script.js", home: "./src/cv.js" },
  output: {
    filename: "[name].js",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.EnvironmentPlugin({
      VERSION: "1.0.0",
    }),
    new HtmlWebpackPlugin({
      template: "./src/page.pug",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/cv.pug",
      filename: "cv.html",
      chunks: [ 'main','home']
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/img/",
          to: "img",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ca]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true,
        },
      },
    ],
  },
};
