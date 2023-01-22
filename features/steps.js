const { Builder, By, Key} = require("selenium-webdriver");
const { Before, After, Given, When, Then } = require("@cucumber/cucumber");
let driver = new Builder().forBrowser("chrome").build();
var assert = require("assert");
let globalPass = "secret_sauce";

Before(async function () {
  await driver.get("https://www.saucedemo.com/");
});

After(async function () {
  await driver.quit();
});

Given(
  "I enter a valid user name and password",
  async function () {
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys(globalPass);
  }
);

When("I click login", async function () {
  await driver.findElement(By.id('login-button')).click();
});

Then("I should be logged in", async function () {
  try {
    cart_element = await driver.findElements(By.id('shopping_cart_container'));
    assert.strictEqual(cart_element.length, 1);
  } catch (err) {
    console.log("Something went wrong...");
  }
});
