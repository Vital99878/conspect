import { BehaviorSubject } from 'rxjs'
import { useEffect, useState, useCallback } from 'react'

/**
 * Хук, который получает BehaviorSubject. Позволяет использовать состояние.
 */

export const useObservableValue = (
  value$: BehaviorSubject<any>,
  initialData?: any
): { field: any; updateField(data: any): void } => {
  const [field, setFiled] = useState((initialData = ''))

  const updateField = useCallback((data: any) => {
    value$.next(data)
  }, [])

  useEffect(() => {
    const subscription = value$.subscribe((data) => setFiled(data))
    return () => subscription.unsubscribe()
  }, [])

  return { field, updateField }
}
