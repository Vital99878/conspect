import React, { useState, useEffect } from 'react'
import { Loading } from './Loading'

/**
 * 1. hoc для получения данных.
 * 2. Пока данные не получены, отображается Loader
 * 3. После получения ототбражается Component
 * @Component  - React.FC
 * @сb - для получения данных. ! Должен возвращать данные того же типа, которые потреблятет Component.
 * @return Loader or Component
 */

export function withData<T>(Component: React.FC<T>, cb: () => T) {
  // todo cb ? скорее всего нужно будет доделать типизацию.
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setData(cb())
      setLoading(false)
    }, 500)
  }, [])

  if (loading) return <Loading />
  return data && <Component {...data} />
}
