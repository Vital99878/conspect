import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { useLocalStorage } from '../../../hooks/customHooks'
import { isAllCheckedOrUnchecked, queriesToFilter } from '../utils'
import { useHistory, useLocation } from 'react-router-dom'

type MultipleFilter = { [key: string]: boolean }
// type Props = {
//   filter: MultipleFilter
// }
//
// type Returned = {
//   filter: MultipleFilter
//   updateFilter: React.Dispatch<React.SetStateAction<MultipleFilter>>
//   setAll: React.Dispatch<React.SetStateAction<MultipleFilter>>
//   isAllChecked: boolean
// }

export function useAllLocalStateMultipleFilter(
  initialFilter = {
    first: false,
    second: false,
    third: false,
  }
) {
  const history = useHistory()
  const { search } = useLocation()
  // const [lsFilter, setLSFilter] = useLocalStorage('filter', initialFilter)
  const [filter, setFilter] = useState<MultipleFilter>(initialFilter)

  useEffect(() => {
    // use search queries params to set filter
    if (!search) return
    if (search) {
      const checkedFieldsFromSearchQueries = queriesToFilter(search as `?${string}`)
      setFilter((filter) => ({ ...filter, ...checkedFieldsFromSearchQueries }))
    }
  }, [])

  useEffect(() => {
    // use filter to update url search queries params
    const checkedFilters = Object.entries(filter).filter((item) => item[1])
    if (!checkedFilters.length) {
      history.push(`/test`)
      return
    }
    const queries = checkedFilters.reduce((acc, filter, index) => {
      const query = filter[0]
      const param = filter[1]
      const isLastItem = !Boolean(checkedFilters[index + 1])
      if (filter[1] && !isLastItem) acc += `${query}=${param}&`
      if (filter[1] && isLastItem) acc += `${query}=${param}`
      return acc
    }, '')
    history.push(`/test?${queries}`)
  }, [filter])

  const updateFilter = (label: string): void => {
    setFilter((state) => ({ ...state, ...{ [label]: !state[label] } }))
  }
  const setAllFilter = (evt: ChangeEvent<HTMLInputElement>): void => {
    setFilter((filter) => {
      const filterKeys = Object.keys(filter)
      return filterKeys.reduce((acc, filterKey) => {
        acc[filterKey] = evt.target.checked
        return acc
      }, {} as { [key: string]: boolean })
    })
  }

  return {
    filter,
    updateFilter,
    setAllFilter,
    ...isAllCheckedOrUnchecked(filter),
  }
}
