const karmaConfig = require('./karma.config');

// enable ChromeHeadless Browser
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  karmaConfig.browsers = ['ChromeHeadless'];
  config.set(karmaConfig);
};
