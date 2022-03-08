import { useState, useEffect } from 'react'
import { SingletonState } from './singletonState'

export function useSingletonState() {
  const [instanceRef, setInstanceRef] = useState<number[]>(SingletonState.getInstance<number>())

  function updateInstanceRef() {
    SingletonState.updateState()
    setInstanceRef(() => SingletonState.getInstance<number>())
  }

  return { instanceRef, updateInstanceRef }
}
