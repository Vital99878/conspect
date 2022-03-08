import { useState} from 'react'
const initialCount = 0

export function useCloser() {
  const [count, setCount] = useState(initialCount)
  function inc(): void {
    setCount((count) => ++count)
  }

  function dec(): void {
    setCount((count) => --count)
  }

  function res(): void {
    setCount(0)
  }

  return { inc, dec, res, count }
}
