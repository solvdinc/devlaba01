const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/js/index.js",
    home: "./src/js/cv.js",
    additional: "./src/js/additional.js",
    modal: "./src/js/modal.js",
  },
  output: {
    path: path.resolve("dist/"),
    filename: "[name].bundle.js",
    clean: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      VERSION: "1.0.0",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pug/cv.pug",
      filename: "cv.html",
      chunks: ["main", "home"],
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/pug/additional.pug",
      filename: "additional.html",
      chunks: ["main", "additional", "modal"],
      minify: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/img",
          to: ".",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
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
