var searchPage = function(){
    //Locators here
    var popularSearches=element(by.css('#container>main>div>section>div>div>div._2TDET>span>span'));
    var breadcrumb=element(by.css('#container>main>div>section>div>div>h1'));
    var categories=element(by.css('#container>main>div>section>div>div>div:nth-child(7)>div._3t6Ih>div>div._3icuH._1ofyz> div.ij2tb>span>span'));

    var searchedAds = element.all(by.css('#container>main>div>section>div>div>div:nth-child(7)>div._1g25P>div>div:nth-child(2)>ul>li'));
    var searchedAdsPrice = element.all(by.css('span[data-aut-id=itemPrice]'));
    var aAdsFound = element(by.className('_2EwP3'));
    var seeMore = element(by.css('#container>main>div>section>div>div>div:nth-child(7)>div._1g25P>div>div.JbJAl>button'));

    var city = element(by.css('#container > header > div > div > div > div > div> div > input'));
    var allCategories = element.all(by.css('#container>header>div>div>div>div>div')).last();
    var categoriesDD = element(by.css('#container > header > div > div > div > div> ul > li > div'));  
    var catExp = element.all(by.css('#container > header > div > div> div > div > ul > li > div > div > div > div >span')).last();
    var catKid = element.all(by.css('#container > header > div > div > div > div > ul > li > div > div > div > div> a')).get(12);
    var catSub = element(by.xpath('//*[@id="container"]/header/div/div[2]/div/div[2]/ul/li/div/div[15]/div[2]/div/div[1]/a/span'));
    var expensionList = element.all(by.className('i20PQ')).first();
    var searchButton = element.all(by.css('#container > header > div > div > div > div > div'));
    var minPrice=element(by.css('div._3bdzO > div > input.range-input-min'));
    var maxPrice=element(by.css('div._3bdzO > div > input.range-input-max'));
    var priceSearch = element(by.css('div._3bdzO > div > a'));
    var priceFilter = element(by.css('div._3t6Ih > div > div:nth-child(1) > ul > li > a > div > span > label'));


    /////////////////////////////////////////////////////Methots here///////////////////////////////////////////////////
    this.getcategories=function(){
        return categories;
    };
    this.getpopularSearches=function(){
        return popularSearches;
    };
    this.getseeMore=function(){
        return seeMore;
    };
    this.clickCity = function(){
        city.click();
    };
    this.setCity = function(cityName){
        city.sendKeys(cityName);
    };
    this.clickAllCategory = function(cityName){
        allCategories.click();
    };

    this.selectCategory=function(){
            browser.executeScript("arguments[0].click();", catExp);
    };
    this.selectSubCategory=function(){
        browser.executeScript("arguments[0].click();", catSub);
    };

    this.clicksearchButton = function(){
        searchButton.get(2).click();
    };
    this.getbreadcrumb = function(){
        return breadcrumb;
    };
    this.selectCity=function(){
        expensionList.click();
    };
    //Function for iterating each card and will verify search text in card.
    this.verifyPageAds= function(searchW) {

        searchedAds.then(function(items){

            if (items.length<=21)
            {

                console.log('****************************** First 20 Ads **********************************');
                for( var i=1; i<items.length; i++)
                {

                    verifyAd(i);

                }
            } 
            else {
                console.log('****************************** Next 20 Ads **********************************');
                var iterations=Math.abs(items.length-20);
                for( var i=iterations; i<items.length; i++)
                {

                    verifyAd(i);

                }

            }

            function verifyAd(i) {
                items[i].getText().then(function(textValue){
                    console.log(i+'---'+textValue);
                    var value=textValue.toString().toLowerCase();
                    if (i===6)
                    {
                        console.log(i+'----------- Ad area ------------');  
                    }
                    else
                    {
                        //return value;
                        for(var k=0; k<searchW.length;k++){
                            // console.log('our word'+searchW[k]);

                            if(value.indexOf(searchW[k]) !== -1){
                                expect(value.indexOf(searchW[k]) !== -1).toBe(true);
                                console.log(i+'-- $$$  contains searched word  $$$');
                                break;
                            }
                            else{
                                // expect(value.indexOf(searchW[k]) !== -1).toBe(true);
                                console.log(i+ ' - Not Matched : '+searchW[k]);
                            }
                        }

                    }

                });
            }; 

        });
    };

    /////////////////////////////////////////////////////////////////

    this.verifyAdsPriceRange= function(min,max) {

        searchedAdsPrice.then(function(items){

            if (items.length<=21)
            {

                console.log('****************************** First 20 Ads **********************************');
                for( var i=1; i<items.length; i++)
                {

                    verifyPriceAd(i);

                }
            } 
            else {
                console.log('****************************** Next 20 Ads **********************************');
                var iterations=Math.abs(items.length-20);
                for( var i=iterations; i<items.length; i++)
                {

                    verifyPriceAd(i);

                }

            }

            function verifyPriceAd(i) {
                items[i].getText().then(function(textValue){

                    var value=textValue.toString().toLowerCase();
                    var subst=textValue.substr(3,8);
                    var adPrice = parseInt(subst.replace(/,/g, ''));
                    if (i===6)
                    {
                        console.log(i+'----------- Ad area ------------');  
                    }
                    else
                    {

                        expect(adPrice).toBeGreaterThan(1999);
                        expect(adPrice).toBeLessThan(3001);
                        console.log(i+'Ad Price are within the range');  

                    }

                });
            }; 

        });
    };

    ////////////////////////////////////////////////////////////////
    this.clickSpecificAd=function(a){
        searchedAds.then(function(items){
            items[a].click();
        });
    };
    this.clickSeeMore=function(){
        seeMore.click();
    };
    this.clickMinPrice= function(){
        minPrice.click();
    };
    this.setMinPrice= function(a){
        minPrice.sendKeys(a);
    };
    this.clickMaxPrice= function(){
        maxPrice.click();
    };
    this.setMaxPrice= function(a){
        maxPrice.sendKeys(a);
    };
    this.clickpriceSearch=function(){
        priceSearch.click();
    };
    this.getpriceFilter=function(){
        return priceFilter;
    };

    this.getSpecificAdText= function(a){
        var valuA = searchedAds.then(function(items){
            var valuB = items[a].getText().then(function(textValue){

                var value=textValue.toString().toLowerCase();
                //console.log('value : '+value);
                return value;
            });

            return valuB;
        });

        return valuA;
    };

};
module.exports= searchPage
