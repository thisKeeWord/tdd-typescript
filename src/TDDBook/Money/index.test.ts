import { Money } from '.'

describe('Money', () => {
  it('should calculate money', () => {
    const moneyResult = Money.times(5)
    expect(moneyResult).toEqual(10)
  })
})
