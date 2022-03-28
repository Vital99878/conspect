import { BehaviorSubject } from 'rxjs'
import { useEffect, useState, useCallback } from 'react'


/**
 * Хук, который получает instance BehaviorSubject. Позволяет использовать состояние.
 */

export function useBehaviorSubject<T>(
  stream$: BehaviorSubject<T>,
  initialValue: T
): [field: T, updateField: (data: T) => void] {
  const [field, setFiled] = useState<T>(initialValue)

  const updateField = useCallback((data: T) => stream$.next(data), [])

  useEffect(() => {
    const subscription = stream$.subscribe((data: T) => setFiled(data))
    return () => subscription.unsubscribe()
  }, [])

  return [field, updateField]
}
