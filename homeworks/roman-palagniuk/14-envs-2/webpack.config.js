const path = require('path');

module.exports = {
  entry: './src/CV.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
  },
};
