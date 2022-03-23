import { useState } from 'react'
import { HistorySearch } from '../utils/history'

type R = {
  searchHistory: string[]
  addItem(phrase: string): void
  deleteItem(index: number): void
}

export function useSearchHistory(size: number): R {
  const historyService = new HistorySearch(size)
  const [searchHistory, setSearchHistory] = useState(historyService.getHistory())

  const addItem = (phrase: string) => {
    historyService.add(phrase)
    setSearchHistory(historyService.getHistory())
  }

  const deleteItem = (index: number) => {
    historyService.delete(index)
    setSearchHistory(historyService.getHistory())
  }

  return {
    searchHistory,
    addItem,
    deleteItem,
  }
}
