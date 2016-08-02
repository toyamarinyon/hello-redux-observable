const webpack = require('webpack');

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
      },
    ]
  }
};
