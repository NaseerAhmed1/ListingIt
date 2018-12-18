var homePage = function() {
    //Locators here
    var homeMdiddle=element(by.css('#container>main >div>section>div.rui-SB2Uw>div.rui-2SwH7.rui-2TiNk.rui-1RzHc.rui-3CPXI.rui-3E1c2.rui-1JF_2.HWxqG>div>div._32WNg>ul'));
    var homeBottom=element(by.css('#footer>div._2sI8Z>div>section.fRN33._2oZEg>div:nth-child(1)>a'));
    var city = element(by.css('#container>header>div>div._2pd-7>div>div.IOsQD>div>input'));
    var searchButton = element(by.css('#container>header>div>div._2pd-7>div>div._3b3oR>span'));
    var productName = element(by.css('#container>header>div>div._2pd-7>div>div._2C0uj>form>fieldset>div>input'));
    var expensionList = element.all(by.className('i20PQ')).first();
    ////////////////////////////////////////////////////////////////////
    var loginH = element(by.css('#container>header>div>div._14lZ9._110yh>span>span'));
    var loginEmailButton = element(by.css('button[data-aut-id=emailLogin]'));
    var loginEmailForm = element(by.className('_1-x0N'));
    var enterEmailH = element(by.css('div._3D13s > div > div.rui-1nEgt > input'));
    var nextButtonH = element(by.css('div > div > form > div > button'));
    var passFormLoadH = element(by.css('div > div > form > div > h3 > span'));
    var enterPassH = element(by.css('#password'));
    var loginButton = element(by.css('div > div > form > div > button'));
    var notification = element(by.css('#container > header > div > div._14lZ9._110yh > div._2sx1i > div > span'));

/////////////////////////////////////////////////////Methots here///////////////////////////////////////////////////
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
    
    //////////////////////////////////////
    this.clickLoginH = function(){
        loginH.click();
    };
    this.LoadEmailForm= function(){
        return loginEmailButton;
    };
    this.clickemailButtonH = function(){
        loginEmailButton.click();
    };
    this.getloginEmailForm= function(){
        return loginEmailForm;
    };
    this.clicklEmailH= function(){
        enterEmailH.click();
    };
    this.iputEmailH= function(){
        enterEmailH.sendKeys('sqcprocess@gmail.com');
    };
    this.clicknextButton = function(){
        nextButtonH.click();
    };
    this.getpassFormLoadH= function(){
        return passFormLoadH;
    };
    this.clickenterPassH = function(){
        enterPassH.click();
    };
    this.setpassH= function(){
        enterPassH.sendKeys('sqcprocess123');
    };
    this.clickloginButton=function(){
        loginButton.click();
    };
    this.getnotification=function(){
        return notification;
    };
};
module.exports = homePage;

