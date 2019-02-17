const path = require('path');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

module.exports = {
  devtool: 'source-map',
  entry: {
    'material-ui': './src/lib/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new MergeIntoSingleFilePlugin({
      files: {
        'vendor.min.js': [
          'node_modules/react/umd/react.production.min.js',
          'node_modules/react-dom/umd/react-dom.production.min.js',
          'node_modules/prop-types/prop-types.min.js',
          'node_modules/@material-ui/core/umd/material-ui.production.min.js'
        ],
        'vendor.js': [
          'node_modules/react/umd/react.development.js',
          'node_modules/react-dom/umd/react-dom.development.js',
          'node_modules/prop-types/prop-types.js',
          'node_modules/@material-ui/core/umd/material-ui.development.js'
        ]
      }
    })
  ]
};
