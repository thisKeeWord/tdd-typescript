import Money from '.'

describe('Money', () => {
  it('should calculate money', () => {
    const moneyResult = new Money(5)
    const firstMoneyResult = moneyResult.times(2)
    expect(firstMoneyResult).toEqual(10)

    const secondMoneyResult = moneyResult.times(3)
    expect(secondMoneyResult).toEqual(15)
  })

  it('should test for equality', () => {
    expect(new Money(5).equals(new Money(5))).toBe(true)
    expect(new Money(5).equals(new Money(6))).toBe(false)
  })
})
