import { useState } from 'react'

interface Basic {
  id: number
}
export interface Item extends Basic {
  [k: string]: unknown
}

const initialItems: Item[] = [
  { id: 1, label: 'item 1', status: 'doing' },
  { id: 2, label: 'item 2', status: 'doing' },
]

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useHookLocalStateTemplate(data: Item[] = initialItems) {
  const [items, setItems] = useState(data)
  const [visibleItems, setVisibleItems] = useState(items)

  const addItem = (item: Item) => {
    setItems((items) => [...items, item])
  }
  const deleteItem = (itemForDelete: Item) => {
    setItems((items) => items.filter((item) => item.id !== itemForDelete.id))
  }
  const updateItem = (updatedItem: Item) => {
    setItems((items) =>
      items.map((item) => {
        item.id === updatedItem.id ? (item = updatedItem) : null
        return item
      })
    )
  }
  // todo cb ts
  const updateVisibleItems = (cb: () => void) => {
    setVisibleItems((items) => items.filter(cb))
  }

  return { items, addItem, deleteItem, updateItem, visibleItems, updateVisibleItems }
}
