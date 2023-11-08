import { Selector, t } from 'testcafe';

const availableInstitution = Selector('li');

class Page {

    constructor () {
        this.moveToListLink     = Selector("button[title='move to list >']");
        this.goToNextStepButton = Selector('span').withText('Go to Next Step');
    }

    async selectInstitute (name) {
        const aa = Selector('li').withAttribute('data-item-label', name);
        await t
            .click(aa)
            .click(this.moveToListLink)
            .click(this.goToNextStepButton);
    }
}

export default new Page();