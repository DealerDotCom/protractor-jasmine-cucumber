var cucumber = require('../src/index.js');

module.exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: cucumber.injectFiles('spec.js'),
  framework: "jasmine2",
  onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
   },
   jasmineNodeOpts: {
       print: function() {} // remove dot printer
    }
};