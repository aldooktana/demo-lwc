import { LightningElement, api } from 'lwc';
import getAccounts from '@salesforce/apex/LTAccounts.getAccounts';


export default class LTHome extends LightningElement {
    accounts = [];
    @api searchAccounts;
    @api error;

    connectedCallback() {
        getAccounts()
            .then(result => {
                this.accounts = result;
                this.searchAccounts = result;
            })
            .catch(error => {
                this.error = error;
            });
    }

    refreshResults (event) {
        let queryTerm = event.currentTarget.value;
        this.searchAccounts = this.accounts.filter(
            acc => acc.Name.toLocaleLowerCase().includes(
                queryTerm.toLocaleLowerCase())
            );
    }
}