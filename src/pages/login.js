import { Selector, t } from 'testcafe';

class Page {

    constructor () {
        this.nameInput      = Selector('#user');
        this.passwordInput  = Selector('#password');
        this.continueButton = Selector("input[name='btnSubmit']");
    }

    async signIn (name, password) {
        await t
            .maximizeWindow()
            .typeText(this.nameInput, name)
            .typeText(this.passwordInput, password)
            .click(this.continueButton);
    }
}

export default new Page();