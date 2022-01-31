import React, { useEffect } from 'react'
import { Singleton } from '../../Singleton'
import '../../../../index.scss'

export const SingletonTest = () => {
  useEffect(() => {
    return Singleton.destroyInstance
  }, [])

  return (
    <div className="SingletonTest">
      <div className={'my-buttons'} >
        <button onClick={() => Singleton.createInstance([1, 2, 3])}>Create instance</button>
        <button onClick={Singleton.getInstance}>Get instance</button>
        <button onClick={Singleton.destroyInstance}>Destroy instance</button>
      </div>
    </div>
  )
}

export default SingletonTest
