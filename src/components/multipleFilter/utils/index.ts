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

export function queriesToFilter(search: `?${string}`): MultipleFilter {
  const res = search.substr(1).split('&')
  return res.reduce((filter, query) => {
    const queryEntries = query.split('=')
    const key = queryEntries[0]
    const value = Boolean(queryEntries[1])
    filter[key] = value
    return filter
  }, {} as MultipleFilter)
}
