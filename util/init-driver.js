const {Builder} = require("selenium-webdriver");

exports.initDriver = () => {
    let driver = new Builder().forBrowser("chrome").build();
    return driver;
}