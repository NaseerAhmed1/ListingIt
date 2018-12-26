var detailPage = function(){
    //Locators here 
    var AdDesc = element(by.css('#container > main > div > div > div> section > div > div > div'));

    var sellerDetail= element(by.css('#container > main > div > div > div > div > div > div > h3 > span'));

    //var adDetailsText = element.all(by.className('_2FRXm'));
    var adDetailsText = element.all(by.className('_2wMiF'));
    var adLocation = element(by.className('_176bN'));

 /////////////////////////////////////////////////////Methots here///////////////////////////////////////////////////
    this.getadDescription = function(){
        return AdDesc;
    };
    this.getsellerDetail= function(){
        return sellerDetail;
    };
    this.getadLocation= function(){
        return adLocation;
    };
    this.getAdDetails = function(){
          var detailAdText=adDetailsText.then(function(items){
            for (var l=0 ; l<items.length;l++){
               var detailAdTextIn=items[l].getText().then(function(txt){
                    var sTxt=txt.toString().toLowerCase();
                    var rem=sTxt.substr(0,30);
                    return rem;
                    //console.log('Detail Ad Details : ' + rem);
                });
                
            }
            return detailAdTextIn;
        });
        return detailAdText;
    };
          
};
module.exports=detailPage;
