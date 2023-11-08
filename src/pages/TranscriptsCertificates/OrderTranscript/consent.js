import { Selector, t } from 'testcafe';


class Page {

    constructor () {
        this.consentCheckbox = Selector('input[id="helpForm:consentCheckbox"]');
        this.sendTransLink   = Selector('a[id="helpForm:sendTrans"]');
        this.sendETransLink  = Selector('a[id="helpForm:sendETrans"]');
        this.sendPTransLink  = Selector('a[id="helpForm:sendPTrans"]');
    }

    async sendTrans () {
        await t
            .click(this.consentCheckbox)
            .click(this.sendTransLink);
    }
}

export default new Page();