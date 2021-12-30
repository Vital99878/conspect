import React from 'react'
import './SingleFilter.scss'
import { useFilter } from './hooks/useFilter'

type CheckBoxItemProps = {
  item: LabelItem
  updateFilter: (label: string) => void
}

export type LabelItem = {
  isActive: boolean
  label: string
}

const CheckBoxItem: React.FC<CheckBoxItemProps> = (props) => {
  const { item, updateFilter } = props

  return (
    <label>
      <input type="checkbox" value={item.label} checked={item.isActive} onChange={() => updateFilter(item.label)} />
      {item.label}
    </label>
  )
}

const SingleFilter: React.FC = () => {
  const { filter, updateFilter } = useFilter()

  return (
    <form className="singleFilter">
      {filter.map((item) => (
        <CheckBoxItem key={item.label} item={item} updateFilter={updateFilter} />
      ))}
    </form>
  )
}

export default SingleFilter
