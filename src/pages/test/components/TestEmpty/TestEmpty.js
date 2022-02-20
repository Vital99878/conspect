import React, { useEffect, useMemo } from 'react'
import './TestEmpty.css'
import { useCloser } from '../../../Preparation/components/PreparationToJS/topics'

const TestEmpty = ({ count }) => {
  const { counter2, n } = useCloser()

  return (
    <div className="testEmpty">
      <h2>Test everything</h2>
      <h2>{count}</h2>
      <button onClick={counter2}>dec</button>
    </div>
  )
}

export default TestEmpty
