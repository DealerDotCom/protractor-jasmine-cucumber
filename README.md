protractor-jasmine-cucumber
================

# Getting Started

	npm install protractor-jasmine-cucumber --save-dev
	
Require at the top of your protractor.conf.js file

	var cucumber = require('protractor-jasmine-cucumber');	
And use the helper function to inject the runner into your suites

	suites: {
        suite1 : cucumber.injectFiles('*-specs.js', '*-steps*.js')
	}
	
Create a feature file

	var feature = require('protractor-jasmine-cucumber').feature;

	feature('IM9 Navigation: Navigation and Context Switching')
    .scenario('should be able to navigate to the LLP')
        .when('I choose "Lifecycles" in the navigation')
        .then('the url hash should be "/lifecycle"')
        .and('the active tab should be "Lifecycles"')

And a steps file

	var featureSteps = require('protractor-jasmine-cucumber').featureSteps;

	featureSteps('IM9 Navigation:')
    .when('I choose "(Lifecycles|Vehicles)" in the navigation', function(navThing){
        var index = navThing === 'Lifecycles' ? 0 : 1;
        element.all(by.repeater('ctx in contexts')).get(index).$('a').click();
    })
    .then('the url hash should be "(.*)"', function(expectedHash){
		expect(browser.getCurrentUrl()).toContain(expectedHash);
    })
    .then('the active tab should be "(.*)"', function(expextedTabText){
        expect(element(by.css('.context-tabs li.active a')).getText()).toBe(expextedTabText);
    })
    
Note: this steps file assumes that the onprepare in protractor.conf.js already got the browser to the app. 
   
See [jasmine-cucumber](https://github.com/DealerDotCom/jasmine-cucumber) for more about how to use jasmine-cucumber. 

Also see [karma-jasmine-cucumber](https://github.com/DealerDotCom/karma-jasmine-cucumber) for use with karma. 