const webpack = require('webpack');
const path = require('path');
const ClosurePlugin = require('closure-webpack-plugin');

module.exports = {
    // devtool: 'source-map',
    watchOptions: {
        ignored: /node_modules/
    },
    entry: {
        main: './src/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'bundle.css',
                        },
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules']
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('license MIT'),
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new ClosurePlugin({
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
                output_manifest: 'dist/%outname%.MF',
                variable_renaming_report: 'dist/variable_renaming_report',
                property_renaming_report: 'dist/property_renaming_report',
                externs: [
                    './src/externs/hack-react.js',
                    './src/externs/react.ext.js',
                    './src/externs/react-dom.ext.js'
                ],
                // formatting: 'PRETTY_PRINT',
                // debug: true,
            })
    ]
};