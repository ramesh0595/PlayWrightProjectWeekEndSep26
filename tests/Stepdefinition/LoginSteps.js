const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const LoginPage = require("../Pages/LoginPage");
const RegistrationPage = require("../Pages/RegistrationPage");
const utils = require("../Utility/BaseClass");
const assert = require("assert");

let login;
let register;

When(
  "The user has to fill the username {string} and password {string}",
  async function (user, pass) {
    login = new LoginPage(this.page);
    await login.enterUsername(user);
    await login.enterPassword(pass);
  },
);

When("The user has to click the login button", async function () {
  await login.clickLogin();
});

Then("The user should be navigate the Invalid login page", async function () {
  const currentURL = await utils.getPageURL(this.page);
  assert.ok(currentURL.includes("Facebook"));
  console.log("The User Should be in Invalid Page");
});

Given("The user should be in login page", async function () {
  console.log("-----Hooks Class we Have Maintained the lanuch browser-----");
});

When("The user has to click the create new account button", async function () {
  register = new RegistrationPage(this.page);
  await register.clickCreateAccount();
});

When(
  "The user has to fill the firstName,LastName and other details",
  async function () {
    await register.enterFirstName("Ramesh");
    await register.enterLastName("Kumar");
  },
);

When("The user has to click the submit button", async function () {
  await register.clickSubmit();
});

Then(
  "The user should be get successfully registered message",
  async function () {
    console.log("User successfully Registered");
  },
);
