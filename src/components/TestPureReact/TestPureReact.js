import React, { useState, useEffect, useRef, useReducer } from 'react'
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

const TestPureReact = () => {
  const inputRef = useRef(null)
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  const [string, setString] = useState('initial state')
  const personRef = useRef({ name: 'John', age: 0 })

  useEffect(() => {
    const input = inputRef.current
    console.log(personRef.current)
  }, [inputRef, personRef.current.age])

  function checkUseRef() {
    setString(inputRef.current.value)
  }
  function changeRefObj() {
    personRef.current.age += 50
    console.log(personRef.current)
  }

  return (
    <div className="testNoTs">
      <h2 className="testNoTs__header">Test Component wihout ts</h2>
      <section>
        <h2 className="testNoTs__header">useRef hook</h2>
        <div>Component will be here!</div>
        <button onClick={changeRefObj}>Change Ref Obj</button>
        <button onClick={checkUseRef}>Rerender with UseState</button>
        <input ref={inputRef}></input>
      </section>
      <section>
        <h2 className="testNoTs__header">useReducer hook</h2>
        <div>{`Count ${state.count}`} </div>
        <button onClick={() => dispatch({ type: 'increment' })}>inc count</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>decrement coutn</button>
      </section>
    </div>
  )
}

export default TestPureReact
