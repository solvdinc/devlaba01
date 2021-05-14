const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");
module.exports = merge(config, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    compress: true,
    writeToDisk: true,
    port: 9000,
  },
});
