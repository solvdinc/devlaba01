const path = require('path');
const webpack = require('webpack');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/script.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/'),
    clean: true,
  },
};
