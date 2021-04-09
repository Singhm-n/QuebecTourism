const{Buiilder,By,Key,util, Builder}=require("selenium-webdriver");
try{
    let driver=await new Builder().forBrowser("firefox").build();
    await driver.get("file:///C:/Users/sahil/Downloads/STT%20Final%20Project%202/STT%20Final%20Project/login.html");
    await driver.findElement(By.name("q")).sendKeys("Selenium",Key.RETURN);
} catch(error){
    console.error(error);
}