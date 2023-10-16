const assert = require('assert');
const colors = require('colors');

class Dollar {
    constructor(amount) {
        this.amount = amount;
    }

    times(multiplier) {
        return new Dollar(this.amount * multiplier)
    }
}

let fiver = new Dollar(5);
let tenner = fiver.times(2);

assert.strictEqual(tenner.amount, 10);
console.log('OK ... Test tenner.amount === 10; PASSED'.green);

