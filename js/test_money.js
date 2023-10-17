import { deepStrictEqual } from 'assert';
import colors from 'colors';
import Money from './money.js';
import Portfolio from './portfolio.js';

let fiveDollars = new Money(5, 'USD');
let tenDollars = new Money(10, 'USD');
deepStrictEqual(fiveDollars.times(2), tenDollars);
console.log('OK ... Test fiveDollars.times(2) === tenDollars; PASSED'.green);

let tenEuros = new Money(10, 'EUR');
let twentyEuros = new Money(20, 'EUR');
deepStrictEqual(tenEuros.times(2), twentyEuros);
console.log('OK ... Test tenEuros.times(2) === twentyEuros; PASSED'.green);

let originalMoney = new Money(4002, 'USD');
let actualMoneyAfterDivision = originalMoney.divide(4);
let expectedMoneyAfterDivision = new Money(1000.5, 'USD');
deepStrictEqual(actualMoneyAfterDivision, expectedMoneyAfterDivision);
console.log('OK ... Test actualMoneyAfterDivision === expectedMoneyAfterDivision; PASSED'.green);

let fifteenDollars = new Money(15, 'USD');
let portfolio = new Portfolio();
portfolio.add(fiveDollars, tenDollars);
deepStrictEqual(portfolio.evaluate('USD'), fifteenDollars);
console.log('OK ... Test portfolio.evaluate("USD") === fifteenDollars; PASSED'.green);
