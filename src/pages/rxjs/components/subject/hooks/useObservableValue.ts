import { BehaviorSubject } from 'rxjs'
import { useEffect, useState } from 'react'

/**
 * Хук, который получает BehaviorSubject. Позволяет использовать состояние.
 */

export const useObservableValue = (value$: BehaviorSubject<any>): { field: string; updateField: any } => {
  const [field, setFiled] = useState<string>('initial')

  const updateField = (text: string) => {
    value$.next(text)
  }

  useEffect(() => {
    const subscription = value$.subscribe((data) => setFiled(data as string))
    return () => subscription.unsubscribe()
  }, [])

  return { field, updateField }
}
