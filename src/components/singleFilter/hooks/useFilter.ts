import { useState } from 'react'
import { LabelItem } from '../SingleFilter'

const initialFilter: LabelItem[] = [
  { label: 'first', isActive: false },
  { label: 'second', isActive: false },
  { label: 'third', isActive: false },
]

export const useFilter = () => {
  const [filter, setFilter] = useState(initialFilter)
  const updateFilter = (label: string) => {
    setFilter((filter) => {
      return filter.map((item) => {
        item.isActive = false
        if (item.label === label) item.isActive = !item.isActive
        return item
      })
    })
  }

  return { filter, updateFilter }
}
