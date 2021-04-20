import React, { useEffect, useRef, useState } from 'react'
import { useWindowWidth } from '../../hooks/customHooks'
import './index.css'

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const TestPage: React.FC<TestPropsChildren> = () => {
  const windowWidth = useWindowWidth()
  return (
    <div className="list">
      <div>
        <p>{`width: ${windowWidth}`}</p>
      </div>
      Test component
    </div>
  )
}

export default TestPage
