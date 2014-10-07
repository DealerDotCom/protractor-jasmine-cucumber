
var specs = require('../node_modules/jasmine-cucumber/src/jasmine-cucumber.js'),
    jasmineFeatureRunner = require('../node_modules/jasmine-cucumber/src/jasmine-feature-runner.js')(specs.features, specs.steps);

console.log('here.... ', specs.features.length);
describe('', function(){
    setTimeout(function(){
      // TODO: maybe this should be in the runner...
        specs.features.forEach(jasmineFeatureRunner);
        var scenarios = specs.features.reduce(function(memo, f){
            return memo + f.scenarios.length;
        }, 0);

        // TODO: how can we output to the console in a "prettier" way?
        console.log('Found ' + specs.features.length + ' features with ' + scenarios + ' scenarios');
    });
});

