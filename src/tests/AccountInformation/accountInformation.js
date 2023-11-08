import { Selector } from "testcafe";
import { RequestLogger } from "testcafe";

import environment from "../../../environment.js";

import login from "../../pages/login";
import whatWouldYouLikeToDo from "../../pages/WhatWouldYouLikeToDo";
import organization from "../../pages/Organization";
import myOrderActivity from "../../pages/AccountInformation/orderActivity";
import contactInformation from "../../pages/AccountInformation/contactInformation";

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
 * This test View profile.
 */
test.meta("testID", "t-002").meta("TestType", "SMOKE")(
  `Start test`,
  async (t) => {
    await whatWouldYouLikeToDo.clickStartApplication_Button();
    await organization.fillFamilyProvider();
    console.log("---------------. Pen number is:");
  }
);

/*
 * This test View Order Activity.
 */
test.meta("testID", "t-003").meta("TestType", "REGRESSION")(
  `View Order Activity for user: ${config.userName} and verify order is:  ${config.order} `,
  async (t) => {
    await dashboard.clickViewYourOrderActivityLink();

    const orderNumber = await myOrderActivity.findOrderNumber(config.order);
    await t.expect(orderNumber.exists).ok();
    console.log("---------------. Find order number:" + config.order);
  }
);

/*
 * This test Update contact phone.
 */
test.meta("testID", "t-004").meta("TestType", "REGRESSION")(
  `Update contact phone for user: ${config.userName} and verify phone number`,
  async (t) => {
    const phone = Math.floor(
      1000000000 + Math.random() * 9000000000
    ).toString();

    await dashboard.clickUpdateYourContactInformationLink();
    await contactInformation.updatePhoneNumber(phone);

    const getPhoneNumber = await contactInformation.phoneNumberTextbox.value;
    await t.expect(getPhoneNumber).eql(phone);
    console.log("---------------. New phone number is:" + getPhoneNumber);
  }
);
