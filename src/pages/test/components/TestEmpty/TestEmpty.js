import React, { useState, useEffect, useRef, useReducer, useLayoutEffect } from 'react'
import './TestEmpty.css'

const TestEmpty = () => {
  const [renderEl, setRenderEl] = useState([])
  useEffect(() => {
    setTimeout(() => {
      setRenderEl([1, 2, 3, 4, 5])
    }, 1000)
  }, [])

  return (
    <div className="testEmpty">
      <h1>Empty Test React component</h1>
      <input autoFocus={true} defaultValue={'test '} />
      <ul>
        {renderEl.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  )
}

export default TestEmpty
