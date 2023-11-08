import { Selector, t } from 'testcafe';

class Page {

    constructor () {
        this.orderdetail_list     = Selector('a');
    }

    async findOrderNumber (orderNumber) {
        const getNumber = this.orderdetail_list .withText(orderNumber);
        return  getNumber;
    }
}

export default new Page();
