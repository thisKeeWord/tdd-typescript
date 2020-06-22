class Money {
  public amount: number
  constructor(money: number) {
    this.amount = money
  }

  times(multiplier: number): number {
    return this.amount * multiplier
  }
  equals(moneyObj: Money | Dollar | Franc): boolean {
    const money = moneyObj
    return (
      this.amount == money.amount &&
      this.constructor.name === money.constructor.name
    )
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
