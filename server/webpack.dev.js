const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(require('./base.config'), {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        PUBLIC_URL: JSON.stringify('localhost:8080'),
        API_URL: JSON.stringify('https://s3-ap-southeast-2.amazonaws.com'),
      },
    }),
  ],
  module: {
    rules: [{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }],
  },
});
