const { format } = require("node:path");

module.exports = {
  default: {
    paths: ["tests/Features/*.feature"],
    require: ["tests/Stepdefinition/*.js"],
    format: [
      "progress",
      "junit:cucumberReport/cucumber-Junit.xml",
      "html:cucumberReport/cucumber-html.html",
      "json:cucumberReport/cucumber-Json.json",
      "allure-cucumberjs/reporter",
    ],
    formatOptions: {
      resultsDir: "allure-results",
    },
  },
};
