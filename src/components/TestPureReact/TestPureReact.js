import React, { useState, useEffect, useRef, useReducer, useMemo } from 'react'
import { useLocalStorage } from '../../app/customHooks'

import './TestPureReact.css'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const TestHooks = () => {
  const inputRef = useRef(null)
  const [state, dispatch] = useReducer(reducer, { count: 10 })
  const [string, setString] = useState(() => 'initial state')
  const [numberForSlowFunction, setNumberForSlowFunction] = useState(0)

  const key = 'key'
  const [value, setValue] = useState('initialValue')

  const [lsKey, setLsKey] = useLocalStorage('key', 'key value')

  const intervalRef = useRef()
  const inputRefKey = useRef(null)
  const inputRefMemo = useRef(null)
  const personRef = useRef({ name: 'John', age: 0 })
  const slowResult = useMemo(() => slowFunction(numberForSlowFunction), [numberForSlowFunction])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  function checkUseRef() {
    setString(inputRef.current.value)
  }
  function changeRefObj() {
    personRef.current.age += 50
    console.log(personRef.current)
  }
  function holdInc() {
    dispatch({ type: 'increment' })
  }
  function setInt() {
    if (intervalRef.current) {
      return
    }
    intervalRef.current = setInterval(holdInc, 50)
  }
  function slowFunction(number) {
    let i = 0
    for (i = 0; i <= 10_00_000_000; i++) {
      i += 1
    }
    console.log(`slowFunction result is ${number} ${i}`)
    return (i - 2) * number
  }

  return (
    <div className="testNoTs">
      <h2 className="testNoTs__header">Test Component wihout ts</h2>
      <section className="testNoTs__useRef">
        <h2 className="testNoTs__header">useRef hook</h2>
        <div>{string}</div>
        <div>{personRef.current.age}</div>
        <button onClick={changeRefObj}>Change Ref Obj</button>
        <button onClick={checkUseRef}>Rerender with UseState</button>
        <input ref={inputRef}></input>
        <details className="details">
          <summary>Ref Details</summary>
          Изменение рефа не вызывает ререндер компонента. Его изменения отобразятся только тогда, когда что-то заставит
          компонент отрендерится
        </details>
      </section>
      <section className="testNoTs__useReducer">
        <h2 className="testNoTs__header">useReducer hook and hold Button for increment</h2>
        <div>{`Count ${state.count}`} </div>
        <button onClick={() => dispatch({ type: 'increment' })}>inc count</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>decrement coutn</button>
        <button
          onMouseDown={setInt}
          onMouseUp={() => {
            clearInterval(intervalRef.current)
            intervalRef.current = null
          }}
        >
          hold for increment count
        </button>
      </section>
      <section className="testNoTs__uselocalStorage">
        <h2>useLocalStorage custom hook</h2>
        <p>{`Local storage value of key: ${lsKey}`}</p>
        <input ref={inputRefKey}></input>
        <button onClick={() => setLsKey(inputRefKey.current.value)}>set LS key</button>
      </section>
      <section className="testNoTs__useMemo">
        <h2>useMemo hook</h2>
        <p>{`Slow calcing result: ${slowResult}`}</p>
        <input
          ref={inputRefMemo}
          onChange={() => setNumberForSlowFunction(inputRefMemo.current.value)}
          type="number"
        ></input>
      </section>
    </div>
  )
}

export default TestHooks
