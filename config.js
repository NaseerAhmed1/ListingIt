
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'chrome'
    },

    onPrepare: function() {
        var AllureReporter = require('./node_modules/jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            allureReport: {
                resultsDir: 'allure-results'
            }
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64');
                }, 'image/png')();
                done();
            });
        });


        var SpecReporter = require('./node_modules/jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'all',      
            displaySuccessesSummary: true, 
            displayFailuresSummary: true,   
            displayPendingSummary: true,    
            displaySuccessfulSpec: true,   
            displayFailedSpec: true,       
            displayPendingSpec: true,      
            displaySpecDuration: true,     
            displaySuiteNumber: true,      
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            },
            prefixes: {
                success: '✓ ',
                failure: '✗ ',
                pending: '* '
            },
            customProcessors: []
        }));
    },
    jasmineNodeOpts: {
        silent: true
    }

};