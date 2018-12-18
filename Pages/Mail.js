var MailPage = function(){
    //Locators here : A
    var enterEmail = element(by.css('#identifierId'));
    var contGmail = element(by.css('#headingSubtext>content'));
    var next = element(by.css('#identifierNext>content>span'));
    var passForam = element(by.css('#forgotPassword>content>span'));
    var enterPass = element(by.css('#password>div.aCsJod.oJeWuf>div>div.Xb9hP>input'));
    var passNext= element(by.css('#passwordNext>content>span'));
    //var mailBox = element(by.css('#\3a 34>tbody'));
    //var mailBox = element.all(by.xpath('//*[@id=":35"]'));

    //Methods here
    this.loadEmailPage = function (){
        browser.get('https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=AddSession');
        browser.waitForAngular();
    };
    this.clickenterEmail = function(){
        enterEmail.click();
    };
    this.getcontGmail= function(){
        return contGmail;
    };
    this.setenterEmail= function(){
        enterEmail.sendKeys('sqcprocess@gmail.com');
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
    this.setenterPass= function(){
        enterPass.sendKeys('sqcprocess123');
    };
    this.clickpassNexts = function(){
        passNext.click();
    };
    this.getLastEmail= function() {
        var deferred = protractor.promise.defer();
        console.log("Waiting for an email...");

        /*mailListener.on("mail", function(mail){
            console.log("Waiting for Abid...");
            deferred.fulfill(mail);
        });*/
        return deferred.promise;
    };

    //Open email from Olx.
    this.getopenEmail = function(){
        console.log('emails:'); 
        var tabledata = mailBox;

        // get rows 
        var rows = tabledata.all(by.tagName("tr"));

        // get cell values
        var cells = rows.all(by.tagName("td"));
        cells.get(0).getText().then(function(a){
            console.log('searching Olx :'+a);   
        })
        //var val= cells.get(0).getText();




        //console.log('searching Olx :'+cells.get(0).getText());
        //expect(cells.get(0).getText()).toEqual("olx");
        //expect(cells.get(1).getText()).toEqual("something")
        //expect(cells.get(2).getText()).toEqual("something")
    };

    this.testfun=function(){
        console.log('emails:'); 
        mailBox.each(function(row){
            console.log('searching row:'+row);         
            var rowElems = row.all(by.tagName('td'));
            //expect(rowElems.count()).toBe(3);
            //expect(rowElems.get(0).getText()).toMatch('/Col1$/');

            console.log('searching Olx :'+rowElems);
        });

    };

    this.sub_ele_index = function (ele, tag, index){
        ele.all(by.tagName(tag)).then(function(sub_elements){
            sub_elements.get(index).click();
        });
    }

};
module.exports=MailPage;
