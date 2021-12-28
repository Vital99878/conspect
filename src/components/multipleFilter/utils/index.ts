type MultipleFilter = { [key: string]: boolean }

/**
 * Проверяет, все фильтры включены или все фильтры отключены
 * @param filter
 * @return object: { isAllChecked: boolean, isAllUnchecked: boolean }
 */

export const isAllCheckedOrUnchecked = (filter: MultipleFilter): { isAllChecked: boolean; isAllUnchecked: boolean } => {
  const isAllChecked = Object.values(filter).reduce((count, isChecked) => {
    count += Number(isChecked)
    return count
  }, 0)
  return {
    isAllChecked: isAllChecked === Object.values(filter).length,
    isAllUnchecked: isAllChecked === 0,
  }
}

/**
 * Трансформируте строку поисковый параметров
 * @param search - search queries params
 * @return object { [string]: boolean }
 */

export function queriesToFilter(search: `?${string}`): { [k: string]: boolean } {
  const res = search.substr(1).split('&')
  return res.reduce<Record<string, boolean>>((filter, query) => {
    const queryEntries = query.split('=')
    const key = queryEntries[0]
    const value = Boolean(queryEntries[1])
    filter[key] = value
    return filter
  }, {})
}

/**
 * transform object to search queries params string
 * @param object { [string]: boolean }
 * @return search queries params
 */

export function filterToQueries(object: { [k: string]: boolean }): string {
  const checkedFilters = Object.entries(object).filter((item) => item[1])
  if (checkedFilters.length === 0) return ''
  return checkedFilters.reduce((acc, filter, index) => {
    const query = filter[0]
    const param = filter[1]
    const isLastItem = !Boolean(checkedFilters[index + 1])
    if (param && !isLastItem) acc += `${query}=${param}&`
    if (param && isLastItem) acc += `${query}=${param}`
    return acc
  }, '')
}
