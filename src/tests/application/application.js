import environment from "../../../environment.js";
import signupPage from "../../pages/SignupPage.js";
import welcomePage from "../../pages/WelcomePage.js";
import viewlistPage from "../../pages/ViewlistPage.js";

fixture("For disaster relief vlounteer service")
  .meta("TestType", "ALL")
  .page(environment.baseUrl)
  .beforeEach(async (t) => {
    await t.maximizeWindow();
  })
  .afterEach(async (t) => {});

/*
 * This is to test the Sigh up flow. REGRESSION test
 */
test.meta("testID", "test-001").meta("TestType", "REGRESSION")(
  `Volunteers sign up for service`,
  async (t) => {
    await welcomePage.click_signUp();
    await signupPage.submitForm();
    console.log("test-001 is executed.");
  }
);

/*
 * This is to test the View volunteers list flow. SMOKE test
 */
test.meta("testID", "test-002").meta("TestType", "SMOKE")(
  `View volunteers list for selected categary`,
  async (t) => {
    await welcomePage.click_viewSubmissions();
    await viewlistPage.selectToView();
    console.log("test-002 is executed.");
  }
);
