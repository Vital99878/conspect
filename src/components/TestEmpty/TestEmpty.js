import React, { useState, useEffect, useRef, useReducer, useLayoutEffect } from 'react'
import './TestEmpty.css'

const TestEmptyComponent = () => {
  const [count, setCount] = useState(5)
  const [count2, setCount2] = useState(50)

  // useEffect(() => {
  //   setTimeout(() => setCount(50), 1000)
  //   return () => {
  //     console.log('clear and unsubscribed')
  //   }
  // })

  useLayoutEffect(() => {
    setCount(500)
    return () => {
      console.log('clear and unsubscribed')
    }
  })

  return (
    <div className="testEmpty">
      <h1>Empty Test React component</h1>
      <p>text content</p>
      <p>{`Count is ${count}`}</p>
      <button onClick={() => setCount((count) => ++count)}>useEffect</button>
      <p>{`Count is ${count2}`}</p>
      <button onClick={() => setCount2((count) => ++count)}>useEffect</button>
    </div>
  )
}

export default TestEmptyComponent
