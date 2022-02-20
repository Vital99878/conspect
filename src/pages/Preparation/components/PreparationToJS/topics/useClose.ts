import { useEffect, useState, useCallback } from 'react'
let count = 0

export function useCloser() {
  function a(): void {
    ++count
  }

  function b(): void {
    count = count * 50
  }

  function resetCount(): void {
    count = 0
  }

  return { counter1: a, counter2: b, resetCount, n: count }
}
