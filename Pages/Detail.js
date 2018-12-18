var detailPage = function(){
    //Locators here 
    var imageGallery = element(by.css('#container>main>div>div>div.rui-2SwH7.rui-m4D6f.rui-yyNoO.rui-3CPXI.rui-3E1c2.rui-1JF_2>div>div'));

    var adDetails = element(by.css('#container main>div>div>div.rui-2SwH7.rui-m4D6f.rui-yyNoO.rui-3CPXI.rui-3E1c2.rui-1JF_2>div >div'));

    //var adDetailsText = element.all(by.className('_2FRXm'));
    var adDetailsText = element.all(by.className('_2wMiF'));
    var adLocation = element(by.className('_176bN'));

 /////////////////////////////////////////////////////Methots here///////////////////////////////////////////////////
    this.getimageGallery = function(){
        return imageGallery;
    };
    this.getadDetailsOld = function(){
        return adDetails;
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
