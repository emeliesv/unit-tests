import { filterNumbers, filterFunc } from './6-filter-numbers'


describe('6-filter-numbers', () => {
  it('should remove all numbers larger than the second argument', () => {
    expect(filterNumbers([1, 20, 25, 34, 99], 25)).toEqual([1, 20, 25])
  })
})

describe('homemade filter-function', () => {
  it('should remove all elements that is false to predicate', () => {
    const startsWithV = (name) => name[0] === 'V'
    expect(filterFunc(['Emelie', 'Victor', 'Vera'],startsWithV)).toEqual(['Victor', 'Vera'])
  })
})