import React from 'react'
import './Navigation.scss'
import { NavigationProps } from './components/types'

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  return (
    <nav>
      <ul className="menu">{children}</ul>
    </nav>
  )
}

export default Navigation
