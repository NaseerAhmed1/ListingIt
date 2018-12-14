var homePage = require('./pages/Home.js');
var searchPage = require('./pages/Search.js');
var detailPage = require('./pages/Detail.js');

describe('olx searched listings itrator', function() {
    browser.ignoreSynchronization = true;
    jasmine.DEFAULT_TIMEOUT_INTERVAL=100000;

    // Objects of each Page is created.
    var home= new homePage();
    var search= new searchPage();
    var detail= new detailPage();

    // launching site and verify that its search component is loaded.
    it('Smoke Testing : olx Smoke is performed', function() {
        /* //Go to home page
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
        expect(detail.getadDetails().isPresent()).toBe(true);
        expect(detail.getadLocation().isPresent()).toBe(true); 
        browser.sleep(5000); */

    });
    it('Verify Search Results : listings are iterated and searched word is verified', function() {
        //Iterate ads of first and 2nd page
        /*home.loadPage();
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
        browser.sleep(3000); */
    }); 
    it('Verify Filters : Filters on search page are verified', function() {
        //Go to search page
        /*home.loadPage();
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
        search.setCity('Lahore');
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
        var args2 = ['kid','bed','furniture'];
        search.verifyPageAds(args2);
        //search.verifyPageAds.apply(args2);
        //search.getbreadcrumb();
        //expect(search.getbreadcrumb().getText()).toContain('Kids Furniture');
        browser.sleep(15000); */
    });
    // made search for any product
    it('Verify Listings : Detail view of the ad is verified', function() {
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
        adText.then(function(text){
            console.log('Listing Ad Text : ' + text);
        });

        search.clickSpecificAd(2);
        browser.sleep(3000);
        detail.getAdDetails().then(function(items){
            items[1].getText().then(function(txt){
                console.log('Detail Ad Details : ' + txt);
            });

        });



        browser.sleep(15000); 
    });

    // iterating each page listings.

});
