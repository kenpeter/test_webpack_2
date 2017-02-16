const path = require('path');

// do html
var HtmlWebpackPlugin = require('html-webpack-plugin');

// where to tell place ./app/index.html to ./dist/index.html?????????//
// because output?????/
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html', // here is teh source.
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
        loaders: ["babel-loader"]
      }
      
    ]
  },
  
  plugins: [HTMLWebpackPluginConfig]
  
};
