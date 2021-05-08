const { merge } = require('webpack-merge');
const config = require('./webpack.common');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: PATHS.dist,
    compress: true,
    writeToDisk: true,
    port: 3000,
  },
});