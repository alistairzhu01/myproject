import { Selector } from "testcafe";
import { RequestLogger } from "testcafe";

import environment from "../../../environment.js";

import login from "../../pages/login";
import dashboard from "../../pages/dashboard";
import consent from "../../pages/TranscriptsCertificates/OrderTranscript/consent";
import selectInstitution from "../../pages/TranscriptsCertificates/OrderTranscript/selectInstitution";
import chooseSendOption from "../../pages/TranscriptsCertificates/OrderTranscript/chooseSendOption";
import addToCart from "../../pages/TranscriptsCertificates/OrderTranscript/addToCart";
import shoppingCart from "../../pages/TranscriptsCertificates/OrderTranscript/shoppingCart";
import postSecondaryInstitutionChoices from "../../pages/TranscriptsCertificates/viewYourPostSecondaryInstitutionChoices";

const userData = require("../../data/user.json");
const config = require("../../../config.json");

fixture("All about StudentTranscripts")
  .meta("TestType", "ALL")
  .page(environment.baseUrl)
  .beforeEach(async (t) => {
    await login.signIn(config.userName, config.passWord);
  })

  .afterEach(async (t) => {
    //  await t.click('#delete-data');
  });

/*
 * This test Order transcript.
 */
test.meta("testID", "t-001").meta("TestType", "REGRESSION")(
  `Order transcript for user:`,
  async (t) => {
    await dashboard.clickOrderYourTranscriptLink();
    await consent.sendTrans();
    await selectInstitution.selectInstitute(config.institution);
    await chooseSendOption.goToNext();
    await addToCart.addOrderToCart();
    await shoppingCart.submitOrder();

    const orderNumber = await shoppingCart.getOrderNumber();
    await t.expect(orderNumber.length).eql(7);
    console.log("---------------. Order number is:" + orderNumber);
  }
);

/*
 * This test Check Post Secondary Institution Choices.
 */
test.meta("testID", "t-005").meta("TestType", "SMOKE")(
  `View Your Post Secondary Institution Choices for user:`,
  async (t) => {
    await dashboard.clickViewYourPostSecondaryInstitutionChoicesLink();

    const getOrderNumber = await postSecondaryInstitutionChoices.returnChoiceWithOrderNumber(
      config.postSecondaryInstitutionChoicesOrder
    );
    await t.expect(getOrderNumber.exists).ok();
    console.log(
      "---------------. Post Secondary Institution Choices order number is:" +
        config.postSecondaryInstitutionChoicesOrder
    );
  }
);
