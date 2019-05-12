const webpack = require('webpack');
const path = require('path');
const ClosurePlugin = require('closure-webpack-plugin');
const paths = require('./config/paths');

const context = path.resolve(__dirname, 'dist');

/** Callbacks with global UMD-name of material-ui imports */
function externalMaterialUI (_, module, callback) {
    var isMaterialUIComponent = /^@material-ui\/core\/([^/]+)$/;
    var isStyle = /^@material-ui\/core\/styles\/([^/]+)$/;
    var match = isMaterialUIComponent.exec(module);
    if (match === null) {
        match = isStyle.exec(module);
    }
    if (match !== null) {
        var component = match[1];
        return callback(null, `window["material-ui"].${component}`);
    }
    var isColor = /^@material-ui\/core\/colors\/([^/]+)$/;
    match = isColor.exec(module);
    if (match !== null) {
        var component = match[1];
        return callback(null, `window["material-ui"]["colors"].${component}`);
    }
    callback();
}

module.exports = {
    devtool: 'source-map',
    watchOptions: {
        ignored: /node_modules/
    },
    entry: {
        main: path.resolve(__dirname, './src/js/main.js')
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
    externals: [
        {
            'prop-types': 'PropTypes',
            'react': 'React',
            'react-dom': 'ReactDOM',
        },
        externalMaterialUI
    ],
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
    optimization: {
      minimize: true,
      minimizer: [
        new ClosurePlugin({
            mode: 'AGGRESSIVE_BUNDLE',
            platform: 'native',
            extraCommandArgs: [
                '-Xmx2g',
                '-Xss8m'
            ]
        }, {
            language_out: 'ES5',
            rewrite_polyfills: true,
            jscomp_off: '*',
            output_manifest: 'dist/%outname%.MF',
            variable_renaming_report: 'dist/variable_renaming_report',
            property_renaming_report: 'dist/property_renaming_report',
            externs: [
                path.resolve(__dirname, './src/externs/react.ext.js'),
                path.resolve(__dirname, './src/externs/react-dom.ext.js'),
                path.resolve(__dirname, './src/externs/prop-types.ext.js'),
                path.resolve(__dirname, './src/externs/material-ui.ext.js'),
                path.resolve(__dirname, './src/externs/mui-components.ext.js'),
            ]
            // formatting: 'PRETTY_PRINT',
            // debug: true,
        })
      ],
      splitChunks: {
        minSize: 0
      },
      concatenateModules: false,
    },
    plugins: [
        new webpack.BannerPlugin('license MIT'),
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new ClosurePlugin.LibraryPlugin({
            closureLibraryBase: require.resolve('google-closure-library/closure/goog/base'),
            deps: [
                require.resolve('google-closure-library/closure/goog/deps'),
                path.resolve(__dirname, './dist/deps.js'),
            ]
        })
    ]
};