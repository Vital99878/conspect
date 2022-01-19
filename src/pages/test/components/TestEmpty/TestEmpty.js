import React, { useState, useEffect, useRef, useReducer, useLayoutEffect } from 'react'
import './TestEmpty.css'
import { useEscapeKey } from '../../../../hooks/useEscapeKey'

const TestEmpty = () => {
  const testEscapeKey = () => console.log('test escape')
  useEscapeKey(testEscapeKey)

  return <div className="testEmpty">Empty component</div>
}

export default TestEmpty
