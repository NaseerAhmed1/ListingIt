var detailPage = function(){
    //Locators here
    var imageGallery = element(by.css('#container>main>div>div>div.rui-2SwH7.rui-m4D6f.rui-yyNoO.rui-3CPXI.rui-3E1c2.rui-1JF_2>div>div'));

    var adDetails = element(by.css('#container main>div>div>div.rui-2SwH7.rui-m4D6f.rui-yyNoO.rui-3CPXI.rui-3E1c2.rui-1JF_2>div >div'));

    var adDetailsText = element.all(by.className('_2FRXm'));

    var adLocation = element(by.className('_176bN'));

    //Methods here
    this.getimageGallery = function(){
        return imageGallery;
    }
    this.getadDetailsOld = function(){
        return adDetails;
    }
    this.getadLocation= function(){
        return adLocation;
    }
    this.getAdDetails = function(){
        return adDetailsText;
    }
};
module.exports=detailPage;
