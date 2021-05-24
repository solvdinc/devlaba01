const { merge } = require('webpack-merge');
const config = require('./webpack.common');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
});