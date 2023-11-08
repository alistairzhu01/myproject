import { Selector, t } from 'testcafe';

class Page {

    constructor () {
        this.orderYourTranscript_Link = Selector("a[href='/dash/order/consent.jsf?faces-redirect=true']");
        this.viewYourProfile_Link = Selector('a').withText('View Your Profile');
        this.viewYourOrderActivity_Link = Selector('a').withText('View Your Order Activity');
        this.updateYourContactInformation_Link = Selector('a').withText('Update Your Contact Information');
        this.viewYourPostSecondaryInstitutionChoices_Link = Selector('a').withText('View Your Post-Secondary Institution Choices');
    }

    async clickOrderYourTranscriptLink () {
        await t
            .click(this.orderYourTranscript_Link);
    }

    async clickViewYourProfileLink () {
        await t
            .click(this.viewYourProfile_Link);
    }

   async clickViewYourOrderActivityLink () {
        await t
            .click(this.viewYourOrderActivity_Link);
    }

    async clickUpdateYourContactInformationLink () {
        await t
            .click(this.updateYourContactInformation_Link);
    }
   
    async clickViewYourPostSecondaryInstitutionChoicesLink () {
        await t
            .click(this.viewYourPostSecondaryInstitutionChoices_Link);
    }

}

export default new Page();
