import { useState, useEffect } from 'react'
import { SingletonState } from './singletonState'

export function useSingletonState() {
  const [instanceRef, setInstanceRef] = useState<number[]>(SingletonState.getInstance<number>())
  const [val, setValue] = useState<string>('string')

  function updateInstanceRef() {
    SingletonState.updateInstance()
    const instance = SingletonState.getInstance<number>()
    setInstanceRef(instance)
    setValue((val) => val + 's')
  }

  useEffect(() => {
    setInstanceRef(SingletonState.getInstance<number>())
  } )

  return { instanceRef, updateInstanceRef }
}
