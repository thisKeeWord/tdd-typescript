export default class Money {
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
