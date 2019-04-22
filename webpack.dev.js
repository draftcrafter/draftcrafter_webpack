const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
    port: 8080,
    compress: false, // enable gzip compression
    historyApiFallback: false, // true for index.html upon 404, object for multiple paths
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    overlay: {
      warnings: true,
      errors: true
    }
  },
});