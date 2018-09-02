var locators = require('./locators');
module.exports = {
    adsFirstPage: function () {
        element.all(by.css(locators.searchedListing)).then(function(items){
            console.log('****************************** First Page **********************************');
            for( var i=0; i<items.length-1; i++)
            {
                if(i>1)
                {
                    verifyAd(i);
                }
            }
            function verifyAd(i){
                        items[i].getText().then(function(textValue){
                        console.log(i+'---'+textValue);
                        var value=textValue.toString().toLowerCase();
                        expect(value).toContain("nokia");
                        console.log(i+'-- $$$  contains searched word  $$$');
                });
            }
        });
    },
     adsOtherPages: function (j) {
          element.all(by.css(locators.searchedListing)).then(function(items){
          console.log('****************************** '+j+' Page **********************************');
            for( var i=0; i<items.length-1; i++)
            {
                if(i>1)
                {
                    verifyAd(i);
                }
            }
            function verifyAd(i){
                
                        items[i].getText().then(function(textValue){
                        console.log(i+'---'+textValue);
                        var value=textValue.toString().toLowerCase();
                        expect(value).toContain("nokia");
                        console.log(i+'-- $$$  contains searched word  $$$');
                });
            }
        });
    }
};