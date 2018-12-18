exports.config = {
    //directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.14.0.jar',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'chrome'
    },

    onPrepare: function() {
        var AllureReporter = require('./node_modules/jasmine-allure-reporter');
        browser.manage().window().setSize(1600, 1000);
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


    /*    var MailListener = require("./node_modules/mail-listener2");

        var mailListener = new MailListener({
            username: "sqcprocess@gmail.com",
            password: "sqcprocess123",
            host: "imap.gmail.com",
            port: 993, // imap port 
            tls: true,
            tlsOptions: { rejectUnauthorized: false },
            mailbox: "INBOX", // mailbox to monitor 
            searchFilter: ["UNSEEN", "FLAGGED"], // the search filter being used after an IDLE notification has been retrieved 
            markSeen: true, // all fetched email willbe marked as seen and not fetched next time 
            fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`, 
            mailParserOptions: {streamAttachments: true}, // options to be passed to mailParser lib. 
            attachments: true, // download attachments as they are encountered to the project directory 
            attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments 
        });

        mailListener.start();

        mailListener.on("server:connected", function(){
            console.log("Mail listener initialized");
        });

        global.mailListener = mailListener;
        
        */
    },
    /*
    onCleanUp: function () {
        mailListener.stop();
    }, */
    
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        silent: true
    }

};