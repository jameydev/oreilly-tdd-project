const assert = require('assert');
const colors = require('colors');

class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency);
    }

    divide(divisor) {
        return new Money(this.amount / divisor, this.currency);
    }
}

let fiveDollars = new Money(5, 'USD');
let tenDollars = new Money(10, 'USD');
assert.deepStrictEqual(fiveDollars.times(2), tenDollars);
console.log('OK ... Test fiveDollars.times(2) === tenDollars; PASSED'.green);

let tenEuros = new Money(10, 'EUR');
let twentyEuros = new Money(20, 'EUR');
assert.deepStrictEqual(tenEuros.times(2), twentyEuros);
console.log('OK ... Test tenEuros.times(2) === twentyEuros; PASSED'.green);

let originalMoney = new Money(4002, 'USD');
let actualMoneyAfterDivision = originalMoney.divide(4);
let expectedMoneyAfterDivision = new Money(1000.5, 'USD');
assert.deepStrictEqual(actualMoneyAfterDivision, expectedMoneyAfterDivision);
console.log('OK ... Test actualMoneyAfterDivision === expectedMoneyAfterDivision; PASSED'.green);

