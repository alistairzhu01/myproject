### Automated Regression Test project 

Test Automation Tool: TestCafe
Design pattern:  Page Object model
(In future: TDD with Cucumber)

### Test Scenarios: 
Function test scenario #1: Applicants fill and submit the application form
Function test scenario #2: Admins select and review the available applicants

### Installation
Download & Install Node.js 
Install Testcafe : npm install -g testcafe
(In future: Install Allure	: npm i @isaac.frontend/testcafe-reporter-allure
Install video record : npm install --save @ffmpeg-installer/ffmpeg)

### Setting up URL for test
- In environment.js

### Setting up data for test
- In config.json 

### Executing Single test in TestCafe
testcafe chrome  ./src/tests/application/application.js -r json:report.json
testcafe chrome --skip-js-errors ./src/tests/application/application.js --speed 0.9 

### Report
Json report
(In future: Using testcafe-reporter-xray-jira to generate report in Jira, or using Allure report)


