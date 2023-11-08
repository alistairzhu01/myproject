import { Selector, t } from 'testcafe';

const orderNumber = Selector('table[class="jrPage"] > tbody > tr:nth-child(2) > td:nth-child(2) > span');

class Page {

    constructor () {
         this.submitOrderButton = Selector('button[id="helpForm:completeContinueButton"]');
    }

    async submitOrder () {
        await t
            .click(this.submitOrderButton);

            const orderValue = await orderNumber.textContent;
            const orderNumberLength = orderValue.length;
            await  t.expect(orderNumberLength).eql(7);
    }

    async getOrderNumber () {
        await t ;
        const num = orderNumber.innerText;
        return  num;
    }
}

export default new Page();
