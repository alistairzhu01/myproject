import { Selector, t } from "testcafe";
import XPathSelector from "../helper/xpath-selector";

class Page {
  constructor() {
    this.emergencySelect = XPathSelector(
      '//*[@id="app"]/div/div/div[2]/div[2]/div/div[1]/div[1]/label/div/div/div[2]/i'
    );
    this.emergencySelect_item = XPathSelector(
      '//*[@id="app"]/div/div/div[2]/div[2]/div/div[1]/div[1]/label/div/div/div[2]/i'
    );

    this.emergencyIcon = Selector(".q-select__focus-target");
    this.severityIcon = XPathSelector(
      "/html/body/div[1]/div/div/div[2]/div[2]/div/div[1]/div[2]/label/div/div/div[1]/div/input"
    );
    this.locationcyIcon = XPathSelector(
      "/html/body/div[1]/div/div/div[2]/div[2]/div/div[1]/div[3]/label/div/div/div[2]"
    );
    this.flood = XPathSelector(
      "/html/body/div[3]/div/div[2]/div[4]/div[2]/div"
    );

    this.high = XPathSelector("/html/body/div[3]/div/div[2]/div[3]/div[2]/div");
    this.mainland = XPathSelector(
      "/html/body/div[3]/div/div[2]/div[2]/div[2]/div"
    );

    this.filter = XPathSelector('//*[@id="filter"]/span[2]/span');

    this.counter = XPathSelector('//*[@id="disasterTable"]/div[2]/div[3]/span');

    this.backHome = XPathSelector('//*[@id="backHome"]/span[2]/span');
  }

  /*
   * Select the filters and view.
   */
  async selectToView() {
    await t
      .click(this.emergencyIcon)
      .click(this.flood)
      .click(this.severityIcon)
      .click(this.high)
      .click(this.locationcyIcon)
      .click(this.mainland)
      .click(this.filter);

    this.verifyListSuccess();

    await t.click(this.backHome);
  }

  /*
   * Verify the page has records.
   */
  async verifyListSuccess() {
    const textCount = await XPathSelector(
      '//*[@id="disasterTable"]/div[2]/div[3]/span'
    ).innerText;
    await t.expect(textCount).contains("1-5");
  }
}

export default new Page();
