var RegPage = function(){
    //Locators here : A
    var login = element(by.css('#container>header>div>div._14lZ9._110yh>span>span'));
    var emailButton = element(by.css('body>div:nth-child(28)>div>div>div>button:nth-child(5)>span'));
    var emailFormLoad = element(by.css('body>div:nth-child(28)>div>div>form>div>h3>span'));
    var enterEmail = element(by.css('body>div:nth-child(28)>div>div>form>div>div._3D13s>div>div.rui-1nEgt>input'));
    var nextButton = element(by.css('body>div:nth-child(28)>div>div>form>div>button>span'));
    var passFormLoad = element(by.css('body>div:nth-child(28)>div>div>form>div>h3>span'));
    var enterPass = element(by.css('#password'));
    var enterPassConfirm = element(by.css('#password-confirm'));
    var creatAccount = element(by.css('body>div:nth-child(28)>div>div>form>div>button>span'));
    var confirmationForm = element(by.css('body>div:nth-child(28)>div>div>form>div>h3>span'));
    var confirmCode1 = element(by.css('body>div:nth-child(28)>div>div>form>div>div._3D13s>div>div>div:nth-child(1)>input[type="number"]'));
     
    //var adLocation = element(by.className('_176bN'));

    //Methods here
    this.clickLogin = function(){
        login.click();
    };
    this.getemailFormLoad= function(){
        return emailFormLoad;
    };
    this.clickemailButton = function(){
        emailButton.click();
    };
    this.clickenterEmail= function(){
        enterEmail.click();
    };
    this.setemail= function(){
        enterEmail.sendKeys('sqcprocess@gmail.com');
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
    this.setpass= function(){
        enterPass.sendKeys('sqcprocess123');
    };
    this.clickenterPassConfirm = function(){
        enterPassConfirm.click();
    };
    this.setenterPassConfirm= function(){
        enterPassConfirm.sendKeys('sqcprocess123');
    };
    this.clickcreatAccount = function(){
        creatAccount.click();
    };
    this.getpassFormLoad= function(){
        return passFormLoad;
    };
    this.getconfirmationForm= function(){
        return confirmationForm;
    };
    this.setconfirmCode1= function(){
        confirmCode1.sendKeys('4');
    };
    
    
   
          
};
module.exports=RegPage;
