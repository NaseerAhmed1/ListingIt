var locators = require('./locators');
//Function for iterating each card and will verify search text in card.
module.exports={
    verifyPageAds: function (j) {
    element.all(by.css(locators.searchedListing)).then(function(items){
            expect(element(by.css(locators.searchedListing)).isPresent()).toBe(true);
            if (j===undefined)
            {
                console.log('****************************** first Page **********************************');
            }
            else{
                console.log('****************************** '+j+' Page **********************************');
            }
            for( var i=0; i<items.length-1; i++)
            {
                if(i>1)
                    {
                    verifyAd(i);
                    }
            }

        });
    }
};

function verifyAd(i){
    element.all(by.css(locators.searchedListing)).then(function(items){
        items[i].getText().then(function(textValue){
            console.log(i+'---'+textValue);
            var value=textValue.toString().toLowerCase();
            expect(value).toContain("nokia");
            console.log(i+'-- $$$  contains searched word  $$$');
        });
    });
}
