// Karma configuration
// Generated on Tue Jan 29 2019 18:56:56 GMT+0800 (China Standard Time)
const path = require('path');
const ClosurePlugin = require('closure-webpack-plugin');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'src/main/webapp/static/dynamic_resources/*_en.js', // our text resource
      'src/main/webapp/test/index.js',
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/main/webapp/test/index.js': 'webpack'
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            include: [
              path.resolve(__dirname, 'src/main/webapp/js/react'),
              path.resolve(__dirname, 'src/main/webapp/js/spreadsheet'),
              path.resolve(__dirname, 'src/main/webapp/test'),
            ],
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/react'],
                plugins: [
                  '@babel/plugin-proposal-object-rest-spread',
                  ['@babel/plugin-proposal-class-properties', {'loose': true}],
                  '@babel/plugin-transform-destructuring',
                  'transform-es2015-modules-commonjs',
                  'istanbul',
                ]
              }
            }
          }
        ]
      },
      plugins: [
        new ClosurePlugin({
          mode: 'NONE',
          closureLibraryBase: 'src/main/webapp/lib/closure-library/closure/goog/base.js',
          deps: [
            'src/main/webapp/js/deps.js', // dependencies for closure, bt and collabo
            'src/main/webapp/js/ess-deps.js', // dependencies for new ess
          ]
        }),
      ]
    },

    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd',
      },
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'lcovonly', subdir: '.' },
        { type: 'json', subdir: '.', file: 'coverage.json' },
        { type: 'html' },
        { type: 'text' }
      ],
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
