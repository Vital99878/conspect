import React, { useEffect } from 'react'
import { Singleton } from './singleton'
import '../../../../index.scss'

export const StateTest = () => {
  useEffect(() => {
    return Singleton.destroyInstance
  }, [])

  return (
    <div className="SingletonTest">
      <div className={'my-buttons'}>
        <button onClick={() => Singleton.createInstance([1, 2, 3])}>Create instance</button>
        <button onClick={Singleton.getInstance}>Get instance</button>
        <button onClick={Singleton.destroyInstance}>Destroy instance</button>
      </div>
    </div>
  )
}

export default StateTest
