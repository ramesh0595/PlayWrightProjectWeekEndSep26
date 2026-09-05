const { Before, After } = require("@cucumber/cucumber");
const utils = require("../Utility/BaseClass");

Before(async function () {
  this.browser = await utils.launchBrowser("chromium", false);
  this.context = await utils.launchContext(this.browser);
  this.page = await utils.launchPage(this.context);
  await utils.launchUrl(this.page, "https://www.facebook.com/");
  console.log("------------Before Scenario---------------1");
});

After(async function (Scenario) {

if(Scenario.result.status=== 'FAILED'){
  const scenarioName=Scenario.pickle.name.trim().replace(/[^a-zA-Z0-9]/g, "_")
const filePath=`tests/ScreenShots/${scenarioName}.png`

const screenshotImage=await this.page.screenshot({
  path:filePath,
  fullPage:true
})

await this.attach(screenshotImage,"image/png")
}

  await utils.pageClose(this.page);
  console.log("------------After Scenario---------------1");
});
