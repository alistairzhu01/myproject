import { RequestHook } from "testcafe";
import Keygrip from "keygrip";
import Base64 from "base-64";

class addCookie extends RequestHook {
  constructor(requestFilterRules) {
    super(requestFilterRules);
  }

  async onRequest(event) {
    const cookieName = "name-of-your-cookie-here"; //Change the value with the name of your authentication cookie
    const cookieSigName = "name-of-your-cookie-here.sig"; //Same as above, but this is the signature cookie

    let cookieValue = { name: "username", email: "username@email.com" }; //Here you have the value that is inside the cookie
    cookieValue = Base64.encode(JSON.stringify(cookieValue)); //Encode to Base64 the string if you need it

    const keys = new Keygrip(["SECRET_KEY"]); //Here you will add your secret
    const hash = keys.sign(`${cookieName}=${cookieValue}`); //This is where you are going to sign the cookie with your secret key

    const myDate = new Date();
    myDate.setFullYear(2020);
    event.requestOptions.headers[
      cookieName
    ] = `${cookieValue};expires=${myDate};domain=${domain};path=/`;
    event.requestOptions.headers[
      cookieSigName
    ] = `${hash};expires=${myDate};domain=${domain};path=/`;
  }

  async onResponse(event) {
    // Anything you need to add when you have the response
  }
}
