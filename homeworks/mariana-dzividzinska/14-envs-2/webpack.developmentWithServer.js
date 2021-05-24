const path = require('path');
const { merge } = require('webpack-merge');
const development = require('./webpack.development');

module.exports = merge(development, {
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    writeToDisk: true,
    port: 1234,
  },
});