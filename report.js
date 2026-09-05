const reporter=require('cucumber-html-reporter')

const options={
    theme:'bootstrap',
    jsonFile:'cucumberReport/cucumber-Json.json',
    output:'cucumberReport/Cucumber-customReport.html',
    reportSuiteAsScenarios:true,
    launchReport:true,
    metadata:{
        "TesterName":"Ramesh",
        "Environment":"QA",
        "Browser":"Chrome",
        "PlatFrom":"Windows",
        "Sprint":"12"
    }

}

reporter.generate(options)







