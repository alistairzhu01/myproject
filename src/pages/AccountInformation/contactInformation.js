import { Selector, t } from 'testcafe';

class Page {
    constructor () {

        this.emailTextbox      = Selector("input[id ='mainForm:inputEmail:email']");
        this.phoneNumberTextbox      = Selector("input[id ='mainForm:inputPhoneNumber:phoneNumber']");
        this.updateButton      = Selector('span').withText('Update');

    }

    async updatePhoneNumber (phone) {

        await t
            .click(this.phoneNumberTextbox)
            .pressKey('ctrl+a delete')
            .typeText(this.phoneNumberTextbox, phone) 
            .click(this.updateButton);
    }

    async verifyPhoneNumber (phone) {

        await t
            .expect(this.phoneNumberTextbox.value).eql(phone);
    }   
}

export default new Page();
