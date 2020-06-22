class Money {
  amount: number
  constructor(money: number) {
    this.amount = money
  }

  times(multiplier: number): number {
    return this.amount * multiplier
  }

  equals(moneyObj: Money): boolean {
    const dollar = moneyObj
    return this.amount == dollar.amount
  }
}

class Franc {
  amount: number
  constructor(franc: number) {
    this.amount = franc
  }

  times(multiplier: number): number {
    return this.amount * multiplier
  }

  equals(francObj: Franc): boolean {
    const dollar = francObj
    return this.amount == dollar.amount
  }
}

export const MoneyFranc = {
  Money: Money,
  Franc: Franc,
}
