import { Selector, t } from 'testcafe';


class Page {

    constructor () {
        this.penNumber     = Selector("span[id='helpForm:PEN']");
    }

    async getPenNumber () {
        await t ;
        const pen = this.penNumber.innerText;
        return  pen;
    }
}

export default new Page();
