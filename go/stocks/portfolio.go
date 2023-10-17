package stocks

type Portfolio []Money

func (p Portfolio) Add(m Money) Portfolio {
	p = append(p, m)
	return p
}

func (p Portfolio) Evaluate(currency string) Money {
	total := 0.0
	for _, m := range p {
		total += convert(m, currency)
	}
	return Money{amount: total, currency: currency}
}

func convert(money Money, currency string) float64 {
	eurToUsd := 1.2
	var value float64
	if money.currency == currency {
		value = money.amount
	} else {
		value = money.amount * eurToUsd
	}
	return value
}
