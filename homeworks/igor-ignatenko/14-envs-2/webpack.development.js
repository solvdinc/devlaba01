const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const path = require('path')

module.exports = merge(config, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/'),
        compress: true,
        writeToDisk: true,
        port: 3000
    }
})