import React, { useState, ReactElement, useRef } from 'react'
import './TestTS.css'
import { tTest } from './models/function.model'
import { storeTodos } from './models/temperary.model'
import { useAttachStyle } from '../../../../hooks/useAttachStyle'
import { sumOfIntervals } from '../../../../utils/codewars'

const TestTS: React.FC = () => {
  console.log(
    sumOfIntervals([
      [-2, 6],
      [1, 5],
      [10, 15],
    ])
  )
  const todos = storeTodos.store
  return <div className="test-typescript">Type script</div>
}

export default TestTS
