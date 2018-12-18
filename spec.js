var homePage = require('./pages/Home.js');
var searchPage = require('./pages/Search.js');
var detailPage = require('./pages/Detail.js');
var regPage = require('./pages/Registration.js');
var mailPage = require('./pages/Mail.js');

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
        
        //Go to home page
        home.loadPage();
        browser.sleep(3000);
        //Verify important elements of Home page.
        expect(home.getSearchButton().isPresent()).toBe(true);
        expect(home.gethomeMdiddle().isPresent()).toBe(true);
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
        expect(search.getcategories().isPresent()).toBe(true);
        expect(search.getseeMore().isPresent()).toBe(true); 

        //Go to detail page
        browser.sleep(3000);
        search.clickSpecificAd(0);
        browser.sleep(5000);
        //Verify important elements of Search page.
        expect(detail.getimageGallery().isPresent()).toBe(true);
        expect(detail.getadDetailsImg().isPresent()).toBe(true);
        expect(detail.getadLocation().isPresent()).toBe(true); 
        browser.sleep(5000); 
        
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
        search.verifyPageAds('nokia');
        browser.sleep(3000);
        search.clickSeeMore();
        browser.sleep(3000);
        //Verify Next 20 ads
        search.verifyPageAds(); 
        browser.sleep(3000); 
        */
    }); 
    it('Verify Filters : Filters on search page are verified', function() {
        /*
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
        search.clicksearchButton();
        browser.sleep(3000);
        //Verify kids furniture
        var args2 = ["kid","bed","furniture"];
        search.verifyPageAds(args2);
        //search.verifyPageAds.apply(args2);
        //search.getbreadcrumb();
        //expect(search.getbreadcrumb().getText()).toContain('Kids Furniture');
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
        */
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

        browser.sleep(15000); 
        */
    });

   it('Verify Sign Up : User Registration completed', function() {
         /* //Go to home page
        home.loadPage();
        browser.sleep(3000);
        //Verify important elements of Home page.
        expect(home.getSearchButton().isPresent()).toBe(true);
        browser.sleep(3000);
        //click Login  getemailFormLoad
        reg.clickLogin();
        browser.sleep(3000);
        expect(reg.getemailFormLoad().isPresent()).toBe(true);

        browser.sleep(3000);
        reg.clickemailButton();
        browser.sleep(3000);
        reg.clickenterEmail();
        browser.sleep(3000);
        reg.setemail();
        browser.sleep(3000);
        expect(reg.getpassFormLoad().isPresent()).toBe(true);
        browser.sleep(3000);
        reg.clickenterPass();
        browser.sleep(3000);
        reg.setpass();
        browser.sleep(3000);
        reg.clickenterPassConfirm()
        browser.sleep(3000);
        reg.setenterPassConfirm();
        browser.sleep(3000);
        reg.clickcreatAccount();
        browser.sleep(3000);
        expect(reg.getconfirmationForm().isPresent()).toBe(true);
        browser.sleep(3000); 


        //Go to mail box
        mail.loadEmailPage();
        browser.sleep(3000);
        expect(mail.getcontGmail().isPresent()).toBe(true);
        browser.sleep(3000);
        mail.clickenterEmail();
        browser.sleep(3000);
        mail.setenterEmail();
        browser.sleep(3000);
        mail.clicknext();
        browser.sleep(3000);
        expect(mail.passForam().isPresent()).toBe(true);
        browser.sleep(3000);
        mail.clickenterPass()
        browser.sleep(3000);
        mail.setenterPass();
        browser.sleep(3000);
        mail.clickpassNexts();
        browser.sleep(3000);
        //mail.getopenEmail();
        // browser.sleep(3000);
        //mail.testfun();



        //mail.getLastEmail();
        browser.sleep(3000);

        browser.sleep(3000);

        browser.sleep(3000);

        browser.sleep(3000);

        browser.sleep(3000);

        browser.sleep(5000); */

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
        
        browser.sleep(20000); 
       */
    });
    it('Testing here', function () {
        /*
        //browser.get('https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=AddSession');
        browser.sleep(3000); */
        /* element(by.css("#identifierId")).sendKeys("sqcprocess@gmail.com");
        browser.sleep(3000);
        element(by.css("#password>div.aCsJod.oJeWuf>div>div.Xb9hP>input")).sendKeys("sqcprocess123");
        browser.sleep(3000);
        element(by.css("#passwordNext>content>span")).click();
        browser.sleep(3000); */
        ///////////////////////////////////////////////////////////
       /* mail.loadEmailPage();
        browser.sleep(3000);
        expect(mail.getcontGmail().isPresent()).toBe(true);
        browser.sleep(3000);
        mail.clickenterEmail();
        browser.sleep(3000);
        mail.setenterEmail();
        browser.sleep(3000);
        mail.clicknext();
        browser.sleep(3000);
        expect(mail.passForam().isPresent()).toBe(true);
        browser.sleep(3000);
        mail.clickenterPass()
        browser.sleep(3000);
        mail.setenterPass();
        browser.sleep(3000);
        mail.clickpassNexts();
        browser.sleep(3000);
        var tbae = element(by.css('#\3a 34'));
        mail.sub_ele_index(tbae,'tr',0);
        //j.click();
        browser.sleep(20000); */
        
       /* browser.controlFlow().wait(mail.getLastEmail()).then(function(email) {
            console.log('in it after last email 1');
            expect(email.subject).toEqual("Your verification code is");
            
            //expect(email.headers.to).toEqual("myemail@email.com");
            console.log('in it after last email 2');

            // extract registration code from the email message
            var pattern = /Your confirmation code is: (\w+)/g;
            var regCode = pattern.exec(email.text)[1]

            console.log(regCode);

        }); */
        
    });

});
