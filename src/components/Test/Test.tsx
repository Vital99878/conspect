import React, { useEffect, useRef, useState } from 'react'
import { useWindowWidth } from '../../app/customHooks'
import './Test.css'

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const Test: React.FC<TestPropsChildren> = () => {
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

export default Test
