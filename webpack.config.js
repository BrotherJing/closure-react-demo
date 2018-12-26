const webpack = require('webpack');
const path = require('path');
const ClosurePlugin = require('closure-webpack-plugin');

module.exports = {
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
    resolve: {
        alias: {
            "react": path.resolve(__dirname, 'node_modules/react'),
            "react-dom": path.resolve(__dirname, 'node_modules/react-dom'),
            "@material": path.resolve(__dirname, 'node_modules/@material'),
        }
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
                exclude: /node_modules\/(?!(@material|closure-react-)).*\/.*/
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
            mode: 'NONE',
            platform: 'native',
            closureLibraryBase: require.resolve('google-closure-library/closure/goog/base'),
            deps: [
                require.resolve('google-closure-library/closure/goog/deps'),
                './dist/deps.js',
            ]
        }, {})
    ]
};