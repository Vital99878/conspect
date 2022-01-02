import React from 'react'
import './MultipleFilter.scss'
import CheckBoxItem from './components/CheckBoxItem/CheckBoxItem'
import { useAllLocalStateMultipleFilter } from './hooks/use_all_local_state_multiple_filter'

/**
 * Фильтр, который позволяет выбрать несколько значений для фильтрации.
 * Use query search params from url to update filter and set checkboxes from current filter
 */

const MultipleFilter: React.FC = () => {
  const { filter, updateFilter, setAllFilter, isAllChecked } = useAllLocalStateMultipleFilter()

  const checkboxes = filter.map((filter) => <CheckBoxItem key={filter[0]} item={filter} updateFilter={updateFilter} />)

  return (
    <form className="singleFilter">
      {checkboxes}
      <label>
        <input type="checkbox" checked={isAllChecked} value={'all'} onChange={setAllFilter} />
        All
      </label>
    </form>
  )
}

export default MultipleFilter
