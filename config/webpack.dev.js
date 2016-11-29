var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dev'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.template.html',
          favicon: 'favicon.png'
        }),
    new ExtractTextPlugin('[name].css'),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },

  debug: true
});
