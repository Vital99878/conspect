import { queriesToFilter } from '../utils'

test('возвращает <Partial> фильтр из строки search queries', () => {
  expect(queriesToFilter('?first=true&third=true')).toStrictEqual({
    first: true,
    third: true,
  })
  expect(queriesToFilter('?second=true&third=true')).toStrictEqual({
    second: true,
    third: true,
  })
})
