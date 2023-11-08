import { Selector, t } from 'testcafe';

class Page {
    constructor () {

        this.confirmCheckbox      = Selector("input[id ='formOrderWizard:checkboxConfirm']");
        this.addOrderToCartButton      = Selector('span').withText('Add Order to Cart');

    }

    async addOrderToCart () {

        await t
            .click(this.confirmCheckbox)
            .click(this.addOrderToCartButton);
    }
}

export default new Page();