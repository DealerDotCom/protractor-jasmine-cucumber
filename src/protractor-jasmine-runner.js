var specs = require('jasmine-cucumber'),
    jasmineFeatureRunner = require('jasmine-cucumber/src/jasmine-feature-runner.js')(specs.features, specs.steps);

describe('', function(){
    specs.features.forEach(jasmineFeatureRunner);
    var scenarios = specs.features.reduce(function(memo, f){
        return memo + f.scenarios.length;
    }, 0);

    console.log('Found ' + specs.features.length + ' features with ' + scenarios + ' scenarios');
});
