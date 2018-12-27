var homePage = require('./pages/Home.js');
var searchPage = require('./pages/Search.js');
var detailPage = require('./pages/Detail.js');
var regPage = require('./pages/Registration.js');
var mailPage = require('./pages/Mail.js');
var sgpt = require('sg-protractor-tools');

describe('olx searched listings itrator', function() {
    browser.ignoreSynchronization = true;
    jasmine.DEFAULT_TIMEOUT_INTERVAL=100000;

    // Objects of each Page is created.
    var home= new homePage();
    var search= new searchPage();
    var detail= new detailPage();
    var reg= new regPage();
    var mail= new mailPage();

    // launching site and verify that its search component is loaded.
    it('Smoke Testing : olx Smoke is performed', function() {
        /*
        //Go to home page
        home.loadPage();
        browser.sleep(3000);
        //Verify important elements of Home page.
        expect(home.getSearchButton().isPresent()).toBe(true);
        browser.sleep(1000);
        expect(home.gethomeMdiddle().isPresent()).toBe(true);
        browser.sleep(1000);
        expect(home.gethomeBottom().isPresent()).toBe(true);

        //Go to search page
        browser.sleep(3000);
        home.clickCity();
        browser.sleep(3000);
        home.setCity('Lahore');
        browser.sleep(3000);
        home.selectCity();
        browser.sleep(3000);
        home.clickSearch();
        browser.sleep(3000); 
        //Verify important elements of Search page.
        expect(search.getpopularSearches().isPresent()).toBe(true);
        browser.sleep(1000);
        expect(search.getcategories().isPresent()).toBe(true);
        browser.sleep(1000);
        expect(search.getseeMore().isPresent()).toBe(true); 

        //Go to detail page
        browser.sleep(3000);
        search.clickSpecificAd(0);
        browser.sleep(5000);
        //Verify important elements of Search page.
        expect(detail.getadDescription().isPresent()).toBe(true);
        browser.sleep(1000);
        expect(detail.getsellerDetail().isPresent()).toBe(true);
        browser.sleep(1000);
        expect(detail.getadLocation().isPresent()).toBe(true); 
        browser.sleep(5000); 
        */
    });
    it('Verify Search Results : listings are iterated and searched word is verified', function() {
        /*
        //Iterate ads of first and 2nd page
        home.loadPage();
        browser.sleep(3000);
        home.clickCity();
        browser.sleep(3000);
        home.setCity('Lahore');
        browser.sleep(3000);
        home.selectCity();
        browser.sleep(3000);
        home.clickProduct();
        browser.sleep(3000);
        home.setProduct('Nokia')
        browser.sleep(3000);
        home.clickSearch();
        browser.sleep(5000);
        //Verify first 20 ads
        var arr1=['nokia'];
        search.verifyPageAds(arr1);
        browser.sleep(3000);
        search.clickSeeMore();
        browser.sleep(3000);
        //Verify Next 20 ads
        search.verifyPageAds(arr1); 
        browser.sleep(3000); 
        */
    }); 
    it('Verify Filters : Filters on search page are verified', function() {

        //Go to search page
        home.loadPage();
        browser.sleep(3000);
        home.clickCity();
        browser.sleep(3000);
        home.selectCity();
        browser.sleep(3000);
        home.clickSearch();
        browser.sleep(5000); 
        expect(search.getcategories().isPresent()).toBe(true);
        expect(search.getseeMore().isPresent()).toBe(true); 
        //Verify City Filters
        browser.sleep(3000);
        search.clickCity();
        browser.sleep(3000);
        search.setCity("Lahore");
        browser.sleep(3000);
        search.selectCity();
        browser.sleep(3000);
        search.clicksearchButton();
        browser.sleep(3000);
        //Verify first 20 ads
        var args1 = ['lahore'];
        search.verifyPageAds(args1);

        //Verify Category Filters
        browser.sleep(3000);
        search.clickAllCategory();
        browser.sleep(3000);
        search.selectCategory();
        browser.sleep(3000); 
        search.selectSubCategory();
        browser.sleep(3000);
        //Verify kids furniture
        var args2 = ["kid","bed","furniture"];
        search.verifyPageAds(args2);
        browser.sleep(3000);
        search.getbreadcrumb();
     
        //verify Price filters
        browser.sleep(3000);
        search.clickMinPrice();
        browser.sleep(3000);
        search.setMinPrice(2000);
        search.clickMaxPrice();
        browser.sleep(3000);
        search.setMaxPrice(3000);
        browser.sleep(3000);
        search.clickpriceSearch();
        browser.sleep(3000);
        expect(search.getpriceFilter().getText()).toContain('Between 2000 and 3000');
        browser.sleep(3000);
        search.verifyAdsPriceRange(2000,3000);
        browser.sleep(3000); 
       
    });
    // made search for any product
    it('Verify Listings : Detail view of the ad is verified', function() {
        /*
        home.loadPage();
        browser.sleep(3000);
        home.clickCity();
        browser.sleep(3000);
        home.setCity('Lahore');
        browser.sleep(3000);
        home.selectCity();
        browser.sleep(3000);
        home.clickSearch();
        browser.sleep(5000);

        var adText=search.getSpecificAdText(2);
        browser.sleep(3000);

        var listAdText, detailAdText;

        adText.then(function(liText){
            listAdText = liText;
            //console.log('Listing Ad Text : ' + liText);
        });
        browser.sleep(3000);
        search.clickSpecificAd(2);
        browser.sleep(3000);


        var dAdText= detail.getAdDetails();
        browser.sleep(3000);
        dAdText.then(function(dText){
            detailAdText = dText;
            //console.log('Detail Ad Text : ' + dText);
        }).then(function(){
            console.log('Listing Ad Text : ' + listAdText);
            console.log('Detail Ad Text : ' + detailAdText);
            expect(listAdText).toContain(detailAdText);
        });

        browser.sleep(5000); 
        */
    });

    it('User logged In - verfied', function () {
        /*
        home.loadPage();
        browser.sleep(3000);
        //Verify important elements of Home page.
        expect(home.getSearchButton().isPresent()).toBe(true);
        browser.sleep(3000);
        //click Login  getemailFormLoad
        home.clickLoginH();
        browser.sleep(5000);
        expect(home.LoadEmailForm().isPresent()).toBe(true);
        browser.sleep(5000);
        home.clickemailButtonH();
        browser.sleep(3000); 
        expect(home.getloginEmailForm().isPresent()).toBe(true);
        browser.sleep(3000);  

        home.clicklEmailH();
        browser.sleep(3000);
        home.iputEmailH();
        browser.sleep(3000);
        home.clicknextButton();
        browser.sleep(3000);
        expect(home.getpassFormLoadH().isPresent()).toBe(true);
        browser.sleep(3000);
        home.clickenterPassH();
        browser.sleep(3000);
        home.setpassH();
        browser.sleep(3000);
        home.clickloginButton();
        browser.sleep(3000);
        expect(home.getnotification().isPresent()).toBe(true);
        browser.sleep(3000);
        home.clickexpLog();
        browser.sleep(3000);
        home.clicklogout();
        browser.sleep(15000);
        */
    });
    it('Verify Sign Up : User Registration completed', function () {
        /*
        var uName= 'sqcprocess8@gmail.com';
        var password = 'sqcprocess123';
        var match;
        //Go to home page
        home.loadPage();
        browser.sleep(3000);
        //Verify important elements of Home page.
        expect(home.getSearchButton().isPresent()).toBe(true);
        browser.sleep(3000);
        //click Login  getemailFormLoad
        reg.clickLogin();
        browser.sleep(3000);
        expect(reg.loadloginForm().isPresent()).toBe(true);

        browser.sleep(3000);
        reg.clickemailButton();
        browser.sleep(3000);
        reg.clickenterEmail();
        browser.sleep(3000);
        reg.setemail(uName);
        browser.sleep(3000);
        reg.clicknextButton();
        browser.sleep(3000);

        expect(reg.getpassFormLoad().isPresent()).toBe(true);
        browser.sleep(3000);
        reg.clickenterPass();
        browser.sleep(3000);

        reg.setpass(password);
        browser.sleep(3000);
        //if user is attempting for the 2nd time
        //home.clickloginButton(); 
        var passW=reg.getpassFormLoad();
        passW.getText().then(function(textP){
            match=textP.toString().toLowerCase();
            console.log('Password form is loaded : '+match);
          }).then(function(){
            if(match=='enter your password')
            {
            console.log('via Login ');
            browser.sleep(3000);
            home.clickloginButton(); 
            browser.sleep(3000);
            }
            else{
            console.log('via Security Code ');
            reg.clickenterPassConfirm()
            browser.sleep(3000);
            reg.setPassConfirm(password);
            browser.sleep(3000);
            reg.clickcreateAccount();
            browser.sleep(3000);
            //expect(reg.getconfirmationForm().isPresent()).toBe(true);
            };
        });

        //Add wait for email to be recieved in your inbox.
        browser.sleep(60000);

        //////////////////////////////Code for Reading email and Switching tabs///////////////////////////
        var securityCode;
        mail.loadEmailPage();
        browser.sleep(3000);
        browser.getAllWindowHandles().then(function (handles) {
            var secondWindowHandle = handles[1];
            var firstWindowHandle = handles[0];
            browser.switchTo().window(secondWindowHandle).then(function () {
                browser.sleep(3000);
                //expect(browser.driver.getCurrentUrl()).toContain("url");
                //do some actions

                expect(mail.getcontGmail().isPresent()).toBe(true);
                browser.sleep(3000);
                mail.clickenterEmail();
                browser.sleep(3000);
                mail.setenterEmail(uName);
                browser.sleep(3000);
                mail.clicknext();
                browser.sleep(3000);
                expect(mail.passForam().isPresent()).toBe(true);
                browser.sleep(3000);
                mail.clickenterPass()
                browser.sleep(3000);
                mail.setenterPass(password);
                browser.sleep(3000);
                mail.clickpassNexts();
                browser.sleep(3000); 
                browser.driver.navigate().refresh();
                browser.sleep(10000); 
                mail.OpenInbox();
                browser.sleep(5000);
                //mail.ReadCode(); 

                var verificationC=mail.ReadCode();
                verificationC.then(function(codeVal){
                    securityCode=codeVal;
                    //console.log('Verification code is :'+securityCode);
                })
                browser.driver.close();
            });
            //---------------------------------------
            browser.switchTo().window(firstWindowHandle).then(function () {
                browser.sleep(3000);
                reg.setconfirmCode(securityCode);          
                browser.sleep(3000);
                reg.clickregLogin();
                browser.sleep(3000);
                expect(home.getnotification().isPresent()).toBe(true);
            });

            //--------------------------------------------    
        });

        browser.sleep(20000); 
        */
    });
    it('Testing Here', function () {
        /*
        var uName= 'ryatt.orrin@plutofox.com';
        var password = 'sapjh3D?';
        var match;
        //Go to home page
        home.loadPage();
        browser.sleep(3000);
        //Verify important elements of Home page.
        expect(home.getSearchButton().isPresent()).toBe(true);
        browser.sleep(3000);
        //click Login  getemailFormLoad
        reg.clickLogin();
        browser.sleep(3000);
        expect(reg.loadloginForm().isPresent()).toBe(true);


        browser.sleep(20000);
        */


    });

});

