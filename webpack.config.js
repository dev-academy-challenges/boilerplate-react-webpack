/* global __dirname */

var path = require('path')

var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var PATHS = {
  build: path.join(__dirname, 'server', 'static'),
  client: path.join(__dirname, 'client'),
  html: path.join(__dirname, 'client', 'html')
}

module.exports = {
  entry: path.join(PATHS.client, 'index.js'),
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  devServer: { contentBase: PATHS.build },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel?cacheDirectory',
      include: PATHS.app
    }]
  },
  plugins: [
    // Simply copies the files over
    new CopyWebpackPlugin([
      { from: PATHS.html } // to: output.path
    ]),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  stats: {
    colors: true // Nice colored output
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
}
