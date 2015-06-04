/* jshint node:true */

var path = require('path'),
    // TODO: should be able to require('jasmine-cucumber')
    jasmineCucumber = require('jasmine-cucumber/src/jasmine-cucumber.js');

module.exports = {
    injectFiles : function(){
        var files = Array.prototype.slice.call(arguments, 0);
        files = files.concat(path.join(__dirname, 'protractor-jasmine-runner.js'));
        return files;
    },
    feature : jasmineCucumber.feature,
    featureSteps : jasmineCucumber.featureSteps
};
