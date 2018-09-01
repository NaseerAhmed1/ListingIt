var helpers = require('./helpers');
var locators = require('./locators');
describe('olx searched listings itrator', function() {
    browser.ignoreSynchronization = true;
    jasmine.DEFAULT_TIMEOUT_INTERVAL=100000;
    
    // launching site and verify that its search component is loaded.
    it('olx is launched successfully', function() {
        browser.get('https://www.olx.com.pk');
        expect(element(by.css('#submit-searchmain')).isPresent()).toBe(true);
    });
    
    // made search
    it('Search is made successfully', function() {
        element(by.css(locators.cityParent)).click();
        browser.sleep(3000);
        element(by.css(locators.city)).click();
        browser.sleep(3000);
        element(by.css(locators.city)).sendKeys(locators.cityName);
        browser.sleep(3000); 
        element(by.css(locators.cityOption)).click();
        browser.sleep(3000);
        element(by.css(locators.searchWord)).sendKeys(locators.productSearched);
        browser.sleep(3000);
        element(by.css(locators.searchWord)).click();
        browser.sleep(3000);
        element(by.css(locators.searchButton)).click();
    });
    
    // iterating each page listings.
    it('listings are iterated and searched word is verified', function() {
        
        expect(element(by.css(locators.searchedListing)).isPresent()).toBe(true);
        
        helpers.adsFirstPage();
        
        element(by.css(locators.totalAds)).getText().then(function(totalad){
            
            browser.driver.getCurrentUrl().then(function(url) {
                //console.log(url);
                var urlCurrent=url.toString();
                var total=parseInt(totalad.replace(/,/g, ''));
                console.log(total); 
                var pages=Math.round(total/44);
                console.log(pages); 
                    for(var j=34; j<=pages; j++)
                        {
                        var nexPageUrl=urlCurrent+'/?page='+j;
                        browser.get(nexPageUrl);
                        iteratePages(j);
                    }
                    function iteratePages(j)
                    {                   
                        helpers.adsOtherPages(j);
                    }
            });
            
        });
        
    });
});