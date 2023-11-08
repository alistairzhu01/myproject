import { Selector, t } from "testcafe";
/*
type=text	  
0 - Legal name    
1 - Org name
2 - Mailing Address
3 - Ctiy
4 - Post Code
5 - Street Address
6 - CTown
7 - PC
8 - Business phone
9 - BCEID
10 - Inc number

type=number - Year of operation  

type=email  - Email address 
*/
class Page {
  constructor() {
    this.EnterFields = Selector("input");
    this.TheNumber = Selector("input").withAttribute("type", "number");
    this.Email = Selector("input").withAttribute("type", "email");
    this.Next_Buttons = Selector("button").withText("Next");
  }

  async fillFamilyProvider() {
    await t.typeText(this.EnterFields.nth(0), "Legal name A");
    await t.typeText(this.EnterFields.nth(1), "Org name A");
    await t.typeText(this.EnterFields.nth(2), "Mailing Address A");
    await t.typeText(this.EnterFields.nth(3), "Ctiy A");
    await t.typeText(this.EnterFields.nth(4), "m1v2b1");

    //await t.typeText(this.EnterFields.nth(5), "Street Address A");
    //await t.typeText(this.EnterFields.nth(6), "CTown A");
   // await t.typeText(this.EnterFields.nth(7), "PC A");
    await t.typeText(this.TheNumber.nth(0), "2011");
    await t.typeText(this.Email, "email@asdf.com");
    await t.typeText(this.TheNumber.nth(1), "2222222222");
    await t.typeText(this.EnterFields.nth(10), "aaaaaaaaaa");

    await t.click(this.Next_Buttons);
  }
}

export default new Page();
