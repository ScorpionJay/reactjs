const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

  

    entry: {
        app: [ 'babel-polyfill', './src/index.js' ]
    },
  output: {
        path: ('./dev/'),
        filename: "app.js",
  },
  // 解决的文件
  resolve: {
        extensions: ['', '.js','.jsx','.scss','.jpg']
    },
  
  // 模块加载器
  module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")},
            { test: /\.jsx|.js$/,exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/,
                loader: 'url?limit=8024&name=img/[name].[ext]'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },

    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("app.css"),
        new HtmlWebpackPlugin({
          title: 'one',
          filename: 'index.html',
          template: 'index.template.html',
          //favicon: path.join(__dirname, 'favicon.ico')
        }),
        // new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     manifest: require('./manifest.json'),
        // }),
    ]

};