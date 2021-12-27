import React, { useEffect } from 'react'
import CheckBoxItem from './components/CheckBoxItem/CheckBoxItem'
import './MultipleFilter.scss'
import { useAllLocalStateMultipleFilter } from './hooks/use_all_local_state_multiple_filter'
import { mock as mockItems } from './mock'
import { useHistory, useLocation } from 'react-router-dom'

/**
 * Фильтр, который позволяет выбрать несколько значений для фильтрации
 */

const MultipleFilter: React.FC = () => {
  const { updateFilter, setAllFilter, isAllChecked, isAllUnchecked, filterStream$, filter } =
    useAllLocalStateMultipleFilter()
  const filters = Object.entries(filterStream$ as { [k: string]: boolean })
  // const filters = Object.entries(filter)
  console.log('filterStream$: ', filterStream$)

  // <editor-fold desc="Логика для проверки работы фильтра. Имитрует отображение данных после фитрации. Нужно будет перенести ее куда-нибудь позже">
  function isAllCategoriesMatch(item: { categories: string[] }): boolean {
    const quantityEnabledFilterKeys = Object.values(filterStream$).filter((item) => item).length
    let quantityItemCategories = item.categories.length
    if (quantityEnabledFilterKeys !== quantityItemCategories) return false

    item.categories.forEach((item) => {
      if (filterStream$[item]) quantityItemCategories--
    })
    return quantityItemCategories === 0
  }
  const visibleItems = isAllUnchecked ? mockItems : mockItems.filter((item) => isAllCategoriesMatch(item))
  // </editor-fold>

  return (
    <form className="singleFilter">
      {filters.map((filter) => (
        <CheckBoxItem key={filter[0]} item={filter} updateFilter={updateFilter} />
      ))}
      <label>
        <input type="checkbox" checked={isAllChecked} value={'all'} onChange={setAllFilter} />
        All
      </label>
    </form>
  )
}

export default MultipleFilter
