exports.config = {
    //directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.14.0.jar',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    allScriptsTimeout: 30000,
    getPageTimeout: 30000,

    onPrepare: function() {
        browser.driver.manage().window().maximize();
        browser.manage().window().setSize(1800, 1200);
        
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


        let SpecReporter = require('./node_modules/jasmine-spec-reporter').SpecReporter;
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

        defaultTimeoutInterval: 9999999,
        silent: true
    }

};