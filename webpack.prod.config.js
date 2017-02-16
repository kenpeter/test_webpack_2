const webpack = require('webpack');
const path = require('path');

// do html
var HtmlWebpackPlugin = require('html-webpack-plugin');

// This will send index.html to ./dist/index.html
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

// sometime, remove node_modules can resolve lots of issues.
module.exports = {
  // context, app
  context: __dirname + "/app",

  // https://stackoverflow.com/questions/42148632/conflict-multiple-assets-emit-to-the-same-filename
  // entry
  // ./app/js/app.js
  entry: {
    // it is javascript, and one entry
    javascript: "./js/app.js"
  },
  
  // output
  // ./dist/app.js
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
    publicPath: "/",
  },
  
  /*
  // not allowed???????
  resolve: {
    extension: ['', '.js', '.jsx', '.json']
  }
  */
  
  module: {
    // so only jsx need babel loader
    // .js use .babelrc????
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader"]
      }
      
    ]
  },
  
  plugins: [
    HTMLWebpackPluginConfig,
  
    // https://facebook.github.io/react/docs/optimizing-performance.html#use-the-production-build
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]

};
