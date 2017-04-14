module.exports = {
  entry: './client/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
   }, {
      test: /\.json$/,
      loader: 'json-loader',
      exclude: /node_modules/
   }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  devtool: 'source-map'
}
