var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV  = 'production';

let FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = webpackMerge(commonConfig, {
  devtool: false,//source-map

  output: {
    path: helpers.root('dist'),
    publicPath: '',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  // htmlLoader: {
  //   minimize: true // workaround for ng2
  // },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.template.html',
      minify:{ 
        removeComments : true,
        collapseWhitespace:true,
        removeAttributeQuotes:true
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
	    output: {
        comments: false,  // remove all comments
      },
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('[name].[hash].css'),//[name].[hash].css
     new webpack.DefinePlugin({
          "process.env": { 
             NODE_ENV: JSON.stringify(ENV) 
           }
        }),
    // icon plugin 
    new FaviconsWebpackPlugin( {
         // Your source logo
          logo: './favicon.png',
          // The prefix for all image files (might be a folder or a name)
          prefix: 'icons/',//icons-[hash]/
          // Emit all stats of the generated icons
          emitStats: false,
          persistentCache: true,
          // Inject the html into the html-webpack-plugin
          inject: true,
          // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
          background: '#fff',
          // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
          title: 'JayApp',
          // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
          icons: {
            android: false,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: false,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: false
          }
        }),
  ]
});
