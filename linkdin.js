let puppeteer = require('puppeteer');
//const {answers}=require('./ans');
// creates headless browser
let browserStartPromise = puppeteer.launch({
    
    // visible browser window
    headless: false,
    // type spped 1 sec to prove it is done manually 
   //slowMo : 200,
    //to open the browser full screen
    // setViewport:{ width: 1920, height: 1040 },
    defaultViewport: null,
    args:[ '--window-size=1920,1040',"--disable-notifications"]
});

//node linkdin.js
let arr=[];
//new page tab open
browserStartPromise.then(function (browserObj){
    
    //nextTab1=browserObj;
    let browserTabOpenPromise =  browserObj.newPage();
   return  browserTabOpenPromise;

}).then(function (newtab){
   //go to googale
     page=newtab
     
     let gpageopen=page.goto("https://www.google.com/");
     return gpageopen;
})
.then(function (){
    //type linkedin
  
    
     let pepcodingSite=page.type("input[title ='Search']","linkedin");
     return pepcodingSite;
 
 }).then(function (){
     //enter and delay
     
     
      let enterwillbedone=page.keyboard.press("Enter",{delay:100});
      return enterwillbedone;
 }).then(function (){
     //sign with google
   
    
     let waitForElement=page.waitForSelector("div.TbwUpd.NJjxre",{visible:true});
     return waitForElement;
}).then(function (){
    //click sign with google
    
     let elemClick=page.click("div.TbwUpd.NJjxre");
     return elemClick;

}).then(function (){
    //email ka tag
  
    
     let waitForElement=page.waitForSelector("a.main__sign-in-link",{visible:true});
     return waitForElement;
}).then(function (){
    //email.per click
    
    
     let pepcodingSite=page.click("a.main__sign-in-link",{delay:100});
     return pepcodingSite;
}).then(function (){
    //type karna hai to us ka tag and wait
    
    
     let waitForElement=page.waitForSelector("#username",{visible:true});
     return waitForElement;
}).then(function (){
    //enter email
   
     let pepcodingSite=page.type("#username","yuvrajaggarwal10@gmail.com",{delay:100});
     return pepcodingSite;
}).then(function (){
    //wait for password tag
    
    
     let waitForElement=page.waitForSelector("input#password",{visible:true});
     return waitForElement;
}).then(function (){
    //type password
    
    
     let pepcodingSite=page.type("input#password","bbbbbbbbggggggg@12",{delay:100});
     return pepcodingSite;
}).then(function (){
    //wait enter button ke lia
    
    
     let waitForElement=page.waitForSelector("button.btn__primary--large.from__button--floating",{visible:true});
     return waitForElement;
}).then(function (){
    //enter per click
    
    
     let pepcodingSite=page.click("button.btn__primary--large.from__button--floating",{delay:100});
     return pepcodingSite;

}).then(function (){
    // linkdin ka search ke tag ka wait
 
    
     let waitForElement=page.waitForSelector("input.search-global-typeahead__input.always-show-placeholder",{visible:true});
     return waitForElement;
}).then(function (){
    //search amazon
   
    
     let pepcodingSite=page.type("input.search-global-typeahead__input.always-show-placeholder","amazon",{delay:100});
     return pepcodingSite;
}).then(function (){
    //enter press
    
    
     let pepcodingSite=page.keyboard.press('Enter')
     return pepcodingSite;
}).then(function (){
    //see all people result wait
   
    
     let waitForElement=page.waitForSelector("div.search-results__cluster-bottom-banner.artdeco-button.artdeco-button--tertiary.artdeco-button--muted",{visible:true});
     return waitForElement;
}).then(function (){
    //see all people result and click
   
    
     let pepcodingSite=page.click("div.search-results__cluster-bottom-banner.artdeco-button.artdeco-button--tertiary.artdeco-button--muted");
     return pepcodingSite;

}).then(function (){
    //see all people result wait
   
    
     let waitForElement=page.waitForSelector("li.reusable-search__result-container>div.entity-result>div.entity-result__item>div.entity-result__image>div.display-flex.align-items-center a.app-aware-link[href]");
     return  waitForElement;

}).then(async function (){
    //see all people result wait
   
    
     //let curls = page.$$eval("#ember458");
     //let y=Array.from(Document.querySelectorAll("li.reusable-search__result-container>div.entity-result>div.entity-result__item>div.entity-result__image>div.display-flex.align-items-center a.app-aware-link[href]"))
     const hrefs1 = await page.evaluate(
        () => Array.from(
          document.querySelectorAll('li.reusable-search__result-container>div.entity-result>div.entity-result__item>div.entity-result__image>div.display-flex.align-items-center a.app-aware-link[href]'),
         a => a.getAttribute('href')
       )
     );
     
    //  console.log(y);
    
    return hrefs1;
    
}).then( async function (y){
    
    
    
    
    for (let i = 0; i < y.length; i++) {
        
       
        page.goto(y[i]);   
        
        let waitForElement= await page.waitForSelector("div.pvs-profile-actions");
        page.click("div.pvs-profile-actions");
        await page.waitFor(300);
        
        
        
    }
   




})



