import { useState } from 'react'
import { LabelItem } from '../SingleFilter'

const initialFilter: LabelItem[] = [
  { label: 'first', isActive: false },
  { label: 'second', isActive: true },
  { label: 'third', isActive: false },
]

export const useFilter = () => {
  const [filter, setFilter] = useState(initialFilter)

  const updateFilter = (label: string) => {
    setFilter((filter) =>
      filter.map((item) => {
        item.label === label ? (item.isActive = !item.isActive) : (item.isActive = false)
        return item
      })
    )
  }

  return { filter, updateFilter }
}
