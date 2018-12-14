var locators = require('./locators');
var common = require('./common');
module.exports = {
    loadPage: function (){
        browser.get('https://www.olx.com.pk');
    },
    makeSearch: function(){
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
    },
    verifySearchedAds: function(){
        common.verifyPageAds();
        element(by.css(locators.totalAds)).getText().then(function(totalad){
            browser.driver.getCurrentUrl().then(function(url) {
                var urlCurrent=url.toString();
                var total=parseInt(totalad.replace(/,/g, ''));
                console.log(total);
                var pages=Math.round(total/44);
                console.log(pages);
                for(var j=39; j<=pages; j++)
                {
                    var nexPageUrl=urlCurrent+'/?page='+j;
                    browser.get(nexPageUrl);
                    iteratePages(j);
                }
                function iteratePages(j)
                {
                    common.verifyPageAds(j);
                }

            });

        });
    }
};

