import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { filterToQueries, isAllCheckedOrUnchecked, queriesToFilter } from '../utils'
import { useHistory, useLocation } from 'react-router-dom'
import useObservableValue from '../../../pages/rxjs/components/subject/hooks'
import { filter$ } from '../mock'

export type MultipleFilter = { [key: string]: boolean }
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

  const { field: filterStream$, updateField } = useObservableValue(filter$, initialFilter)

  useEffect(() => {
    updateField(initialFilter)
    // set filter if search queries exist in the url
    if (!search) return
    if (search) {
      const checkedFieldsFromSearchQueries = queriesToFilter(search as `?${string}`)
      setFilter((filter) => ({ ...filter, ...checkedFieldsFromSearchQueries }))
    }
  }, [])

  useEffect(() => {
    // update observable if filter changes
    updateField(filter)
  }, [filter])

  useEffect(() => {
    // updating url search queries params if filter changes
    const queries = filterToQueries(filter)
    console.log('queries: ', queries)
    if (!queries) {
      history.push('/test')
      return
    }
    history.push(`/test?${queries}`)
  }, [filter])

  const updateFilter = (label: string): void => {
    setFilter((state) => {
      return { ...state, ...{ [label]: !state[label] } }
    })
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
    filterStream$,
  }
}
