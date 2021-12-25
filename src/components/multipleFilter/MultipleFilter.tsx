import React from 'react'
import CheckBoxItem from './components/CheckBoxItem/CheckBoxItem'
import './MultipleFilter.scss'
import { useAllLocalStateMultipleFilter } from './hooks/use_all_local_state_multiple_filter'
import { mock as mockItems } from './mock'

/**
 * Фильтр, который позволяет выбрать несколько значений для фильтрации
 */

const MultipleFilter: React.FC = () => {
  const { filter, updateFilter, setAll, isAllChecked } = useAllLocalStateMultipleFilter()
  const filters = Object.entries(filter)

  // <editor-fold desc="Логика для проверки работы фильтра. Имитрует отображение данных после фитрации. Нужно будет перенести ее куда-нибудь позже">
  function isAllCategoriesMatch(item: { categories: string[] }) {
    const quantityEnabledFilterKeys = Object.values(filter).filter((item) => item).length
    let quantityItemCategories = item.categories.length

    if (quantityEnabledFilterKeys !== quantityItemCategories) return false

    item.categories.forEach((item) => {
      if (filter[item]) quantityItemCategories--
    })
    return quantityItemCategories === 0
  }
  const visible = mockItems.filter((item) => isAllCategoriesMatch(item))
  console.log('visible: ', visible)
  // </editor-fold>

  return (
    <form className="singleFilter">
      {filters.map((filter) => (
        <CheckBoxItem key={filter[0]} item={filter} updateFilter={updateFilter} />
      ))}
      <label>
        <input type="checkbox" checked={isAllChecked} value={'all'} onChange={setAll} />
        All
      </label>
    </form>
  )
}

export default MultipleFilter
