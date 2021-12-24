import React, { useEffect, useRef, useState } from 'react'
import { useWindowWidth } from '../../hooks/customHooks'
import './index.css'
import { TestTS, TestPureReact, TestEmpty } from './components'
import Todos from '../../components/Todos/Todos'

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const TestPage: React.FC<TestPropsChildren> = () => {
  const windowWidth = useWindowWidth()
  return (
    <div className="test-components">
      <Todos />
      {/* <TestTS/>*/}
      {/* <TestEmpty/>*/}
      {/* <TestPureReact/>*/}
    </div>
  )
}

export default TestPage
