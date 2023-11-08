import { Selector, t } from 'testcafe';


class Page {

    constructor () {
        //this.institutionChoicesItem = Selector('tr[data-ri=""]');
        this.institutionChoicesNumber = Selector('td');
  
    }

    async returnChoiceWithOrderNumber (orderNum) {
        return this.institutionChoicesNumber.withText(orderNum);
       
    }
}

export default new Page();