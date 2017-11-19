const webpack = require('webpack');

module.exports = {
  context: __dirname + "/example",
  entry: [
    'react-hot-loader/patch',
    './app.js'
  ],
  devServer: {
    contentBase: './example',
    hot: true
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/example",
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }
    ],
  },
}