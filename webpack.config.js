const webpack = require('webpack');
const path = require('path');
const ClosurePlugin = require('closure-webpack-plugin');

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
    mode: 'development',
    devtool: 'cheap-source-map',
    watchOptions: {
        ignored: /node_modules/
    },
    entry: {
        main: './src/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules\/(?!(@material\/|closure-react-.*\/)).*/
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
        new ClosurePlugin.LibraryPlugin({
            closureLibraryBase: require.resolve('google-closure-library/closure/goog/base'),
            deps: [
                require.resolve('google-closure-library/closure/goog/deps'),
                path.resolve(__dirname, './dist/deps.js'),
            ]
        })
    ]
};