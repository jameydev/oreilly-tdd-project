import functools
import operator
from money import Money

class Portfolio:
    def __init__(self):
        self.moneys = []
        
    def __convert(self, money, currency):
        exchangeRates = {"EUR->USD": 1.2, "USD->KRW": 1100}
        value = 1
        if money.currency == currency:
            value = money.amount
        else:
            key = "%s->%s" % (money.currency, currency)
            value = money.amount * exchangeRates[key]
        return value
    
    def add(self, *moneys):
        self.moneys.extend(moneys)
    
    def evaluate(self, currency):
        total = functools.reduce(
            operator.add, 
            map(lambda m: self.__convert(m, currency), self.moneys), 
            0
        )
        return Money(total, currency)