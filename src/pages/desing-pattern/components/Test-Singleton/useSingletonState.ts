import { useState, useEffect } from 'react'
import { SingletonState } from './singletonState'

export function useSingletonState() {
  const [instanceRef, setInstanceRef] = useState<number[]>([0])

  useEffect(() => {
    if (SingletonState.getInstance() !== null) {
      const i = SingletonState.getInstance<number>()
      setInstanceRef(() => i)
    } else setInstanceRef(SingletonState.createInstance<number>([1, 2, 3]))
  }, [])

  function updateInstanceRef() {
    setInstanceRef(() => {
      SingletonState.updateState()
      return SingletonState.getInstance<number>()
    })
  }

  return { instanceRef, updateInstanceRef }
}
