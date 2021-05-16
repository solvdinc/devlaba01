const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.common');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    index: 'home.pug',
    compress: true,
    writeToDisk: true,
    port: 3000,
  },
});
