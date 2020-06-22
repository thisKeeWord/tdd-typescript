import { MoneyFranc } from '.'

describe('Money', () => {
  it('should calculate money', () => {
    const moneyResult = new MoneyFranc.Money(5)
    const firstMoneyResult = moneyResult.times(2)
    expect(firstMoneyResult).toEqual(10)

    const secondMoneyResult = moneyResult.times(3)
    expect(secondMoneyResult).toEqual(15)
  })

  it('should test for equality', () => {
    expect(new MoneyFranc.Money(5).equals(new MoneyFranc.Money(5))).toBe(true)
    expect(new MoneyFranc.Money(5).equals(new MoneyFranc.Money(6))).toBe(false)
  })

  // chapter 4 - privacy
  it('should correctly compare Money to Money', () => {
    const moneyResult = new MoneyFranc.Money(5)
    expect(new MoneyFranc.Money(10).amount).toEqual(moneyResult.times(2))
    expect(new MoneyFranc.Money(15).amount).toEqual(moneyResult.times(3))
  })

  // chapter 5 - Franc-ly speaking
  it('should correctly compare Fanc to Franc', () => {
    const francResult = new MoneyFranc.Franc(5)
    expect(new MoneyFranc.Franc(10).amount).toEqual(francResult.times(2))
    expect(new MoneyFranc.Franc(15).amount).toEqual(francResult.times(3))
  })
})
