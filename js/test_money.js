import * as assert from 'assert';
import colors from 'colors';
import Money from './money.js';
import Portfolio from './portfolio.js';

class MoneyTest {
    testMultiplication() {
        let tenEuros = new Money(10, 'EUR');
        let twentyEuros = new Money(20, 'EUR');
        assert.deepStrictEqual(tenEuros.times(2), twentyEuros);
        console.log(colors.green('\u2713 OK ... testMultiplication | PASS'));
    }

    testDivision() {
        let originalMoney = new Money(4002, 'USD');
        let actualMoneyAfterDivision = originalMoney.divide(4);
        let expectedMoneyAfterDivision = new Money(1000.5, 'USD');
        assert.deepStrictEqual(actualMoneyAfterDivision, expectedMoneyAfterDivision);
        console.log(colors.green('\u2713 OK ... testDivision | PASS'));
    }

    testAddition() {
        let fiveDollars = new Money(5, 'USD');
        let tenDollars = new Money(10, 'USD');
        let fifteenDollars = new Money(15, 'USD');
        let portfolio = new Portfolio();
        portfolio.add(fiveDollars, tenDollars);
        assert.deepStrictEqual(portfolio.evaluate('USD'), fifteenDollars);
        console.log(colors.green('\u2713 OK ... testAddition | PASS'));
    }

    testAdditionOfDollarsAndEuros() {
        let fiveDollars = new Money(5, 'USD');
        let tenEuros = new Money(10, 'EUR');
        let portfolio = new Portfolio();
        portfolio.add(fiveDollars, tenEuros);
        let expectedValue = new Money(17, 'USD');
        assert.deepStrictEqual(portfolio.evaluate('USD'), expectedValue);
        console.log(colors.green('\u2713 OK ... testAdditionOfDollarsAndEuros | PASS'));
    }

    runAllTests() {
        const testMethods = this.getAllTestMethods();
        testMethods.forEach(m => {
            console.log(colors.yellow(`\nRunning Test: ${m}`));
            let method = Reflect.get(this, m);
            try {
                Reflect.apply(method, this, []);
            }
            catch (e) {
                if (e instanceof assert.AssertionError) {
                    console.error(colors.red(`\u2717 FAILED ... ${m} | ${e.message}`));
                }
                else {
                    throw e;
                }
            }
        });
        console.log(colors.blue('\n***======END TESTS======***\n'));
    }

    getAllTestMethods() {
        const moneyPrototype = MoneyTest.prototype;
        const testMethods = Object.getOwnPropertyNames(moneyPrototype)
            .filter(prop => {
                return typeof moneyPrototype[prop] === 'function' &&
                    prop.startsWith('test');
            });

        return testMethods;
    }
}

new MoneyTest().runAllTests();