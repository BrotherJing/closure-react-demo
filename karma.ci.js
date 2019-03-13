const baseConfig = require('./karma.config');

// enable ChromeHeadless Browser
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  baseConfig(config);
  config.set({
    browsers: ['ChromeHeadless']
  });
};
