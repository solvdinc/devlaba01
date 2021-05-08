const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = PATHS = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
};

module.exports = {
  entry: {
    main: PATHS.src + '/js/main.js',
    home: PATHS.src + '/js/home.js',
    additional: PATHS.src + '/js/additional.js',
    modalContent: PATHS.src + '/js/modal-content.js',
  },
  output: {
    path: PATHS.dist,
    filename: 'js/[name].bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.src + '/views/home.pug',
      filename: PATHS.dist + '/views/home.html',
      chunks: ['main', 'home'],
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: PATHS.src + '/views/additional.pug',
      filename: PATHS.dist + '/views/additional.html',
      chunks: ['main', 'additional'],
      minify: true,
    }),
    new MiniCssExtractPlugin({
        filename: "styles/[name].css",
    }),
    new CopyWebpackPlugin({
        patterns: [
            {
                from: PATHS.src + "/img/",
                to: "img",
            },
        ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/i,
        use: ['pug-loader'],
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
