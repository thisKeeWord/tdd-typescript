class Money {
  public amount: number
  constructor(money: number) {
    this.amount = money
  }

  times(multiplier: number): number {
    return this.amount * multiplier
  }
  equals(moneyObj: Money): boolean {
    const money = moneyObj
    return this.amount == money.amount
  }
}

class Dollar extends Money {
  constructor(amount: number) {
    super(amount)
  }
}

class Franc extends Money {
  constructor(amount: number) {
    super(amount)
  }
}

export const MoneyFranc = {
  Money: Money,
  Dollar: Dollar,
  Franc: Franc,
}
