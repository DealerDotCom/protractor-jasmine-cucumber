/* globals browser: false, expect : false */
var jasmineCucumber = require('../src/index.js'),
    feature = jasmineCucumber.feature,
    featureSteps = jasmineCucumber.featureSteps;

feature('angular is Superheroic')
    .scenario('should be Superheroic')
        .given('I navigate to "http://www.angularjs.org"')
        .then('the title should contain "Superheroic"');

featureSteps('angular is Superheroic')
    .given('I navigate to "(.*)"', function(url){
        browser.get(url, 2000).then(this.async());
    })
    .then('the title should contain "(.*)"', function(contents){
        browser.getTitle()
            .then(function(title){
                expect(title).toContain(contents);
            })
            .then(this.async());
    });
