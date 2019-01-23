const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-3-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: {
    'material-ui': './src/lib/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    // new UglifyJsPlugin()
  ]
};
