import Money from '.'

describe('Money', () => {
  it('should calculate money', () => {
    const moneyResult = new Money(5)
    const firstMoneyResult = moneyResult.times(2)
    expect(firstMoneyResult).toEqual(10)

    const secondMoneyResult = moneyResult.times(3)
    expect(secondMoneyResult).toEqual(15)
  })
})
