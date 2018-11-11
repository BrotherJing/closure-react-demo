const webpack = require('webpack');
const path = require('path');
const ClosurePlugin = require('closure-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',

    entry: {
        main: './src/js/main.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        inline: true,
        // hot: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('license MIT'),
        // new webpack.HotModuleReplacementPlugin(),
        new ClosurePlugin({
            // mode: 'NONE',
            mode: 'AGGRESSIVE_BUNDLE',
            platform: 'native',
            closureLibraryBase: require.resolve('google-closure-library/closure/goog/base'),
            deps: [
                require.resolve('google-closure-library/closure/goog/deps'),
                './dist/deps.js',
            ]
        }, {
            compilation_level: 'ADVANCED',
            language_out: 'ES5',
            rewrite_polyfills: false,
            jscomp_off: '*',
            output_manifest: '%outname%.MF',
            variable_renaming_report: 'dist/variable_renaming_report',
            property_renaming_report: 'dist/property_renaming_report',
            externs: [
                './src/externs/hack-react.js',
                './src/externs/react.ext.js',
                './src/externs/react-dom.ext.js'
            ],
            define: 'process.env.NODE_ENV="development"',
            // formatting: 'PRETTY_PRINT',
            // debug: true,
        })
    ]
  };