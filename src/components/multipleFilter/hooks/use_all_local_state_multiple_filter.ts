import { useState } from 'react'

const initialFilter: { [key: string]: boolean } = {
  first: false,
  second: false,
  third: false,
}

export function useAllLocalStateMultipleFilter() {
  const [filter, setFilter] = useState(initialFilter)

  const checkIsAll = (): boolean => {
    const isAllChecked = Object.values(filter).reduce((count, isChecked) => {
      count += Number(isChecked)
      return count
    }, 0)
    return isAllChecked === Object.values(filter).length
  }
  const updateFilter = (label: string) => {
    setFilter((state) => ({ ...state, ...{ [label]: !state[label] } }))
  }
  const setAll = (evt: any) => {
    setFilter((filter) => {
      const filterKeys = Object.keys(filter)
      return filterKeys.reduce((acc, filterKey) => {
        acc[filterKey] = evt.target.checked
        return acc
      }, {} as { [key: string]: boolean })
    })
  }

  return { filter: filter, updateFilter, setAll, isAllChecked: checkIsAll() }
}
