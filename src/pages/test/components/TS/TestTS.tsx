import React, { useState, ReactElement, useRef } from 'react'
import './TestTS.css'
import { tTest } from './models/function.model'
import { storeTodos } from './models/temperary.model'
import { useAttachStyle } from '../../../../hooks/useAttachStyle'

const TestTS: React.FC = () => {
  const todos = storeTodos.store
  return <div className="test-typescript">Type script</div>
}

export default TestTS
