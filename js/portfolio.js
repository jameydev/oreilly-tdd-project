import Money from './money.js';

export default class Portfolio {
    constructor() {
        this.moneys = [];
    }

    add(...moneys) {
        this.moneys = this.moneys.concat(moneys);
    }

    convert(money, currency) {
        const eurToUsd = 1.2;
        let value = 1;

        if (money.currency === currency) {
            value = money.amount;
        }
        else {
            value = money.amount * eurToUsd;
        }

        return value;
    }

    evaluate(currency) {
        let total = this.moneys.reduce((sum, money) => {
            return sum + this.convert(money, currency);
        }, 0);
        return new Money(total, currency);
    }
}