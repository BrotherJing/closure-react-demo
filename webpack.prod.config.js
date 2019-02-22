const webpack = require('webpack');
const path = require('path');
const ClosurePlugin = require('closure-webpack-plugin');
const paths = require('./config/paths');

const context = path.resolve(__dirname, 'dist');

module.exports = {
    devtool: 'source-map',
    watchOptions: {
        ignored: /node_modules/
    },
    entry: {
        main: './src/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.min.js',
        devtoolModuleFilenameTemplate (info) {
            let rel = info.resourcePath.substr(info.resourcePath.indexOf(__dirname));
            rel = path.relative(context, rel);
            return `${rel}`
        }
    },
    externals: {
        '@material-ui/core': 'window["material-ui"]',
        '@material-ui/core/styles': 'window["material-ui"]',
        '@material-ui/core/colors': 'window["material-ui"]["colors"]',
        'prop-types': 'PropTypes',
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    module: {
        rules: [
            // First, run the linter.
            // It's important to do this before Babel processes the JS.
            {
              test: /\.(js|jsx)$/,
              enforce: 'pre',
              use: [
                {
                  options: {
                    formatter: require.resolve('react-dev-utils/eslintFormatter'),
                    eslintPath: require.resolve('eslint'),
                    
                  },
                  loader: require.resolve('eslint-loader'),
                },
              ],
              include: paths.appSrc,
            },
            {
                test: /(\.jsx|\.js)$/,
                include: paths.appSrc,
                use: {
                    loader: "babel-loader"
                },
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
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                            require('autoprefixer')(),
                            ],
                        },
                    },
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
                rewrite_polyfills: true,
                jscomp_off: '*',
                output_manifest: 'dist/%outname%.MF',
                variable_renaming_report: 'dist/variable_renaming_report',
                property_renaming_report: 'dist/property_renaming_report',
                externs: [
                    './src/externs/react.ext.js',
                    './src/externs/react-dom.ext.js',
                    './src/externs/prop-types.ext.js',
                    './src/externs/material-ui.ext.js',
                    './src/externs/mui-components.ext.js',
                ],
                // formatting: 'PRETTY_PRINT',
                // debug: true,
            })
    ]
};