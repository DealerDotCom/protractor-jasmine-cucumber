var cucumber = require('../src/index.js');

module.exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: cucumber.injectFiles('spec.js')
};