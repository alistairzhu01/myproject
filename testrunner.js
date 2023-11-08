const createTestCafe = require("testcafe");

let testcafe = null;
let runner = null;

createTestCafe("localhost", 1337, 1338)
  .then((tc) => {
    testcafe = tc;
    runner = testcafe.createRunner();

    return (
      runner
        // list all test case files
        .src([
          "./src/tests/AccountInformation/accountInformation.js",

        ])

        //List all browsers
        .browsers(["chrome"])
        //.browsers(['edge','chrome','firefox'])

        //Set concurrency number
        //.concurrency(3)

        //Set export to report
        //.reporter("allure")

        //Select test suites to be executed. If no parameter argv[2] suplied, then run ALL test suites. If supplied argv[2], then will run the filtered test cases.
        .filter((testName, fixtureName, fixturePath, testMeta, fixtureMeta) => {
          if (process.argv[2] === undefined) {
            return fixtureMeta.TestType === "ALL";
          } else {
            return testMeta.TestType === process.argv[2];
          }
        })

        //Set up screenshot
        .screenshots({
          path: "artifacts/screenshots",
          takeOnFails: true,
        })

        //Set up video record feature
        //.video("./report/videos/", {
        //  singleFile: true,
        //  failedOnly: true,
       // })

        //Set up execution parameters
        .run({
          skipJsErrors: true,
          //quarantineMode: true,
          selectorTimeout: 50000,
          assertionTimeout: 7000,
          pageLoadTimeout: 8000,
          speed: 0.9,
          //stopOnFirstFail: true
        })
    );
  })
  .then((failedCount) => {
    console.log("Tests failed: " + failedCount);
    testcafe.close();
  });
