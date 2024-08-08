import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency){
        this._amount = amount;
        this._currency = currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(v) {
        this._amount = v;
    }

    get currency() {
        return this._currency;
    }

    set currency(v){
        this._currency = v;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}