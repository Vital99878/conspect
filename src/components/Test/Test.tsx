import React, { useState, ReactElement } from 'react'
import './Test.css'

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const Test: React.FC<TestPropsChildren> = () => {
  const tuple: [string, number] = ['age', 25]
  tuple[0] = 'ffff'
  tuple[1] = 58
  tuple.pop()

  return <div className="list">Test componente</div>
}

export default Test
