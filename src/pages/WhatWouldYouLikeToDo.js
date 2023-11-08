import { Selector, t } from "testcafe";

class Page {
  constructor() {
    this.StartApplication_Button =
      Selector("button").withText("Start Application");
    this.GO_Buttons = Selector("button").withText("GO");
  }

  async clickStartApplication_Button() {
    await t.click(this.StartApplication_Button);
    //   .click(this.GO_Button);

    await t.click(this.GO_Buttons.nth(1));
  }
}

export default new Page();
