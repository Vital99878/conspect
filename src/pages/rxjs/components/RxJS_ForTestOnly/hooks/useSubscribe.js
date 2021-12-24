import React, { useEffect, useState } from 'react'
import { BehaviorSubject } from 'rxjs'

export const useSubscribe = () => {
  const [data, setData] = useState([0, 1, 2])

  const data$ = new BehaviorSubject([1, 2])

  useEffect(() => {
    data$.subscribe((data) => setData(data))
  }, [])

  const add = () => {
    data$.next([10])
  }

  return { data, add }
}
