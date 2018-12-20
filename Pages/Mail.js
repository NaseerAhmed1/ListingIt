var MailPage = function(){
    //Locators here 
    var enterEmail = element(by.css('#identifierId'));
    var contGmail = element(by.css('#headingSubtext>content'));
    var next = element(by.css('#identifierNext>content>span'));
    var passForam = element(by.css('#forgotPassword>content>span'));
    var enterPass = element(by.css('#password>div.aCsJod.oJeWuf>div>div.Xb9hP>input'));
    var passNext= element(by.css('#passwordNext>content>span'));
    var inBoxT = element.all(by.css('div.Cp>div>table > tbody>tr'));
    var emailHTML = element(by.css('div > table > tbody > tr > td > table > tbody > tr> td > table > tbody > tr> td > table> tbody > tr >td>strong'));
    //var mailBox = element.all(by.xpath('//*[@id=":35"]'));

    //////////////////////////////Methods here////////////////////////////////////////////////////////////////////////////
    this.loadEmailPage = function (){
        let url='https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=AddSession';

        return browser.executeScript("return window.open(arguments[0], '_blank')", url);
    };
    this.clickenterEmail = function(){
        enterEmail.click();
    };
    this.getcontGmail= function(){
        return contGmail;
    };
    this.setenterEmail= function(UserN){
        enterEmail.sendKeys(UserN);
    };
    this.clicknext = function(){
        next.click();
    };
    this.passForam= function(){
        return passForam;
    };
    this.clickenterPass = function(){
        enterPass.click();
    };
    this.setenterPass= function(pW){
        enterPass.sendKeys(pW);
    };
    this.clickpassNexts = function(){
        passNext.click();
    };
    this.OpenInbox=function(){
        inBoxT.then(function(items){
            items[0].click();
        });
    }
    this.ReadCode=function(){       
        var cValue=emailHTML.getText().then(function(txt){
            //console.log('Our Code is : '+txt);
            return txt;
        });  
        return cValue;
    };


};
module.exports=MailPage;
