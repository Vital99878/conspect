import { useState, useEffect, useDebugValue } from 'react'

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)
    return initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  useDebugValue(value ? 'Local Storage contain some key' : 'LS empty')

  return [value, setValue]
}

export { useLocalStorage }
