import { Selector, t } from 'testcafe';

class Page {

    constructor () {
        this.goToNextStepButton = Selector('span').withText('Go to Next Step');
    }

    async goToNext () {
        await t
            .click(this.goToNextStepButton)
            .wait(2000);
    }
}

export default new Page();