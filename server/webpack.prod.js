const merge = require('webpack-merge');
const webpack = require('webpack');
module.exports = merge(require('./base.config'), {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        PUBLIC_URL: JSON.stringify('https://thanhtran1987.github.io/beteasy-page'),
        API_URL: JSON.stringify('https://s3-ap-southeast-2.amazonaws.com'),
      },
    }),
  ],
});
