const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.common');
const development = require('./webpack.development');

module.exports = merge(development, {
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 1234,
  },
});