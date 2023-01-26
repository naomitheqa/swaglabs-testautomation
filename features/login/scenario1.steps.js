const { By, Key} = require("selenium-webdriver");
const { Before, After, Given, When, Then} = require("@cucumber/cucumber");
const { initDriver } = require("../../util/init-driver");
var assert = require("assert");

let globalPass = "secret_sauce";
let driver;

Before(async function () {
  driver = initDriver();
  await driver.get("https://www.saucedemo.com/");
});

After(async function () {
  await driver.quit();
});

Given("I enter standard_user as the user name", async function () {
  await driver.findElement(By.id("user-name")).sendKeys("standard_user");
});

Given("I enter the correct password", async function () {
  await driver.findElement(By.id("password")).sendKeys(globalPass);
});

When("I click login", async function () {
  await driver.findElement(By.id('login-button')).click();
});

Then("I should be logged in", async function () {
  try {
    cart_element = await driver.findElements(By.id('shopping_cart_container'));
    assert.strictEqual(cart_element.length, 1);
  } catch (err) {
    assert.fail(`${err}`);
  }
});