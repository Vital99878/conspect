import React, { useState, ReactElement } from 'react'
import './Test.css'

// type TestProps = {
//   props: any
// }

// const Test: React.FC<TestProps> = ({ props }) => {
//   const children: any = props.children
//   return <div className="test">{children}</div>
// }

type TestPropsChildren = {
  children: React.ReactNode[] | React.ReactNode
}

const Menu: React.FC<TestPropsChildren> = ({ children }) => {
  return <ul className="list">{children}</ul>
}

export default Menu
