var RegPage = function(){
    //Locators here 
    var login = element(by.css('#container>header>div>div._14lZ9._110yh>span>span'));
    var emailOptionButton = element(by.css('button[data-aut-id=emailLogin]'));
    var emailFormLoad = element.all(by.css('body>div>div>div>form>div>h3>span'));
    var enterEmail = element(by.css('body>div>div>div>form>div>div._3D13s>div>div.rui-1nEgt>input'));
    var nextButton = element(by.css('body>div>div>div>form>div>button>span'));

    var passFormLoad = element(by.css('body>div>div>div>form>div>h3>span'));
    var enterPass = element(by.css('#password'));
    var enterPassConfirm = element(by.css('#password-confirm'));
    var createAccount = element(by.css('body>div>div>div>form>div>button>span'));
    var confirmationForm = element(by.css('body>div>div>div>form>div>h3>span'));
    var confirmCode = element.all(by.css('body>div>div>div>form>div>div._3D13s>div>div>div>input'));
    var regLogin = element.all(by.css('body > div> div > div > form > div > button > span'));


    //var adLocation = element(by.className('_176bN'));

    ///////////////////////////////////////Methods here////////////////////////////////////////////////////
    this.clickLogin = function(){
        login.click();
    };
    this.loadloginForm= function(){
        return emailOptionButton;
    };
    this.clickemailButton = function(){
        emailOptionButton.click();
    };
    this.clickenterEmail= function(){
        enterEmail.click();
    };
    this.setemail= function(uN){
        enterEmail.sendKeys(uN);
    };
    this.clicknextButton = function(){
        nextButton.click();
    };
    this.getpassFormLoad= function(){
        return passFormLoad;
    };
    this.clickenterPass = function(){
        enterPass.click();
    };
    this.setpass= function(pW){
        enterPass.sendKeys(pW);
    };
    this.clickenterPassConfirm = function(){
        enterPassConfirm.click();
    };
    this.setPassConfirm = function(pW){
        enterPassConfirm.sendKeys(pW);
    };
    this.clickcreateAccount = function(){
        createAccount.click();
    };
    this.getpassFormLoadTxt= function(){
        passFormLoad.getText().then(function(texP){
            console.log('Password form is loaded'+texP)
        });
    }
    this.getconfirmationForm= function(){
        return confirmationForm;
    };
    this.convertCodetoArray = function(cd){
        var a = cd;
        var arr = a.toString(10).replace(/\D/g, '0').split('').map(Number);
        return arr;
    };

    this.setconfirmCode= function(cV){
        confirmCode.sendKeys(cV);
    };
    this.clickregLogin = function(){
        regLogin.click();
    };

};
module.exports=RegPage;
