import { queriesToFilter, isAllCheckedOrUnchecked, filterToQueries, isAllCategoriesMatch } from '../utils'
import { items, initialFilter } from '../mock'

test('should return Partial filter from search queries string', () => {
  expect(queriesToFilter('?first=true&third=true')).toStrictEqual({
    first: true,
    third: true,
  })
  expect(queriesToFilter('?second=true&third=true')).toStrictEqual({
    second: true,
    third: true,
  })
})

test('should be search query param string', () => {
  expect(
    filterToQueries({
      first: true,
      second: true,
    })
  ).toEqual('first=true&second=true')
  expect(
    filterToQueries({
      first: true,
      third: true,
    })
  ).toEqual('first=true&third=true')
})

describe('should be check what all object\'s keys true or all false', () => {
  it('should be isAllChecked = true', () => {
    expect(isAllCheckedOrUnchecked({ firstKey: true })).toStrictEqual({
      isAllChecked: true,
      isAllUnchecked: false,
    })
  })
  it('should be isAllChecked = false', () => {
    expect(isAllCheckedOrUnchecked({ firstKey: false })).toStrictEqual({
      isAllChecked: false,
      isAllUnchecked: true,
    })
  })
  it('should be isAllChecked =  true', () => {
    expect(isAllCheckedOrUnchecked({ firstKey: true, secondKey: true, thirdKey: true })).toStrictEqual({
      isAllChecked: true,
      isAllUnchecked: false,
    })
  })
  it('should be isAllUnChecked = true', () => {
    expect(isAllCheckedOrUnchecked({ firstKey: false, secondKey: false, thirdKey: false })).toStrictEqual({
      isAllChecked: false,
      isAllUnchecked: true,
    })
  })
  it('should be isAllChecked and isAllChecked =false', () => {
    expect(isAllCheckedOrUnchecked({ firstKey: false, secondKey: false, thirdKey: true })).toStrictEqual({
      isAllChecked: false,
      isAllUnchecked: false,
    })
  })
})

test('should check existing categories in item', () => {
  expect(
    isAllCategoriesMatch({ categories: ['first', 'second'] }, { first: true, second: false, third: false })
  ).toBeFalsy()
  expect(
    isAllCategoriesMatch({ categories: ['first', 'second'] }, { first: true, second: true, third: false })
  ).toBeTruthy()
})
