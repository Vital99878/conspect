import React, { useState, ReactElement } from 'react'
import './Test.css'

type TestPropsChildren = {
  children?: React.ReactNode[] | React.ReactNode
}

const Test: React.FC<TestPropsChildren> = () => {
  return <div className="list">Test componente</div>
}

export default Test
