var homePage = function() {
    //Locators here
    var homeMdiddle=element(by.css('#container>main >div>section>div.rui-SB2Uw>div.rui-2SwH7.rui-2TiNk.rui-1RzHc.rui-3CPXI.rui-3E1c2.rui-1JF_2.HWxqG>div>div._32WNg>ul'));
    var homeBottom=element(by.css('#footer>div._2sI8Z>div>section.fRN33._2oZEg>div:nth-child(1)>a'));

    var city = element(by.css('#container>header>div>div._2pd-7>div>div.IOsQD>div>input'));
    var searchButton = element(by.css('#container>header>div>div._2pd-7>div>div._3b3oR>span'));
    var productName = element(by.css('#container>header>div>div._2pd-7>div>div._2C0uj>form>fieldset>div>input'));
    var expensionList = element.all(by.className('i20PQ')).first();

    //Methods here
    this.loadPage = function (){
        browser.get('https://www.olx.com.pk');
    };

    this.gethomeBottom = function(){
        return homeBottom;
    };
    this.gethomeMdiddle = function(){
        return homeMdiddle;
    };

    this.getSearchButton = function(){
        return searchButton;
    };
    this.getCity = function(){
        return city.getText();
    };
    this.getProductName = function(){
        return productName.getText();
    };
    this.clickCity = function(){
        city.click();
    };
    this.setCity = function(cityName){
        city.sendKeys(cityName);
    };
    this.clickProduct = function(){
        productName.click();
    };
    this.setProduct = function(product){
        productName.sendKeys(product);
    };
    this.selectCity=function(){
        expensionList.click();
    };
    this.clickSearch = function(){
        searchButton.click();
    };
};
module.exports = homePage;

