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

/**
 * Вся логика фильтра в этом хуке.
 * При использовании filter$ рендер работает неправильно.Рендерятся все MultipleFilter при апдейте одного
 */

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

  // Todo При использовании filter$ рендер работает неправильно.Рендерятся все MultipleFilter при апдейте одного
  const [filterStream$, updateField] = useObservableValue(filter$, initialFilter)

  useEffect(() => {
    // set filter if search queries exist in the url. need to Redirect from link
    if (!search) return
    if (search) {
      const checkedFieldsFromSearchQueries = queriesToFilter(search as `?${string}`)
      setFilter((filter) => ({ ...filter, ...checkedFieldsFromSearchQueries }))
    }
  }, [])

  useEffect(() => {
    // updateField(filter)
    const queries = filterToQueries(filter)
    // window.history.pushState({path: `/test?${queries}`}, 'undefined');
    // history.push(`/test?${queries}`)
  }, [filter])

  const updateFilter = (label: string): void => {
    setFilter((state) => {
      return { ...state, ...{ [label]: !state[label] } }
    })
  }
  const setAllFilter = (evt: ChangeEvent<HTMLInputElement>): void => {
    setFilter((filter) => {
      const filterKeys = Object.keys(filter)
      return filterKeys.reduce<Record<string, boolean>>((acc, filterKey) => {
        acc[filterKey] = evt.target.checked
        return acc
      }, {})
    })
  }

  return {
    filter: Object.entries(filter as { [k: string]: boolean }),
    updateFilter,
    setAllFilter,
    ...isAllCheckedOrUnchecked(filter),
    filterStream$,
  }
}
