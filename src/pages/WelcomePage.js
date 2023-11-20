import { Selector, t } from "testcafe";

class Page {
  constructor() {
    this.signUp = Selector("span").withText("SIGN UP");
    this.viewSubmissions = Selector("span").withText("VIEW VOLUNTEERS");
  }

  /*
   * Go to Sigh up page.
   */
  async click_signUp() {
    await t.click(this.signUp);
  }

  /*
   * Go to Viewlist page.
   */
  async click_viewSubmissions() {
    await t.click(this.viewSubmissions);
  }
}

export default new Page();
