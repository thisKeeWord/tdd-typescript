export default class Money {
  amount: number
  constructor(money: number) {
    this.amount = money
  }
  times(multiplier: number): number {
    return this.amount * multiplier
  }
}
