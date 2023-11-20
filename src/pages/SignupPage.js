import { Selector, t } from "testcafe";
import XPathSelector from "../helper/xpath-selector";

class Page {
  constructor() {
    this.firstName = Selector("input[aria-label='First Name']");
    this.lastName = Selector("input[aria-label='Last Name']");
    this.email = Selector("input[aria-label='Email']");
    this.phoneNumber = Selector("input[aria-label='Phone Number']");
    this.firstAid = XPathSelector(
      '//*[@id="app"]/div/div/div[2]/div/div[2]/form/div[3]/div[2]/div[1]'
    );
    this.firefighting = XPathSelector(
      '//*[@id="app"]/div/div/div[2]/div/div[2]/form/div[3]/div[2]/div[2]/div[2]'
    );
    this.counselling = XPathSelector('//*[@id="Counseling"]/div/div');
    this.pilotingPlane = XPathSelector("");
    this.operatingBoats = XPathSelector("");
    this.operatingForklifts = XPathSelector("");
    this.searchAndRescue = XPathSelector("");
    this.mainland = XPathSelector(
      '//*[@id="app"]/div/div/div[2]/div/div[2]/form/div[4]/div[2]/div[2]/div'
    );
    this.interior = Selector("input[id ='interior']");
    this.north = Selector("input[id ='north']");
    this.vancouverIsland = Selector("input[id ='vancouverIsland']");
    this.submit = XPathSelector('//*[@id="submitForm"]/span[2]/span');
    this.successMessage = XPathSelector(
      '//*[@id="app"]/div/div/div[2]/div/div[2]'
    );
    this.backToHome = XPathSelector('//*[@id="backToHome"]/span[2]/span');
  }

  /*
   * Fill the form with generated data and submit.
   */
  async submitForm() {
    const randomName = "First_" + Math.random().toString(36).slice(2, 7);
    const randomPhone = Math.floor(
      1000000000 + Math.random() * 9000000000
    ).toString();

    await t
      .click(this.firstName)
      .typeText(this.firstName, randomName)
      .expect(this.firstName.value)
      .eql(randomName)
      .click(this.lastName)
      .typeText(this.lastName, "lastName")
      .click(this.email)
      .typeText(this.email, "email@asdf.com")
      .click(this.phoneNumber)
      .typeText(this.phoneNumber, randomPhone)
      .click(this.firstAid)
      .click(this.firefighting)
      .click(this.mainland)
      .click(this.submit);

    this.verifySubmitSuccess();

    await t.click(this.backToHome);
  }

  /*
   * Verify the success message is displayed.
   */
  async verifySubmitSuccess() {
    await t
      .expect(
        Selector("div").withText(
          "Thanks for signing up. We'll contact you when we need your support."
        ).exists
      )
      .ok();
  }
}

export default new Page();
