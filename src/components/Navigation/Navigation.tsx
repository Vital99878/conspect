import React from 'react'
import './Navigation.scss'
import {TNavigationItemProps} from './components/NavigationItem/NavigationItem';

type MenuProps = {
  children: React.ReactElement<TNavigationItemProps>[]
}

const Navigation: React.FC<MenuProps> = ({ children }) => {
  return (
    <nav>
      <ul className="menu">{children}</ul>
    </nav>
  )
}

export default Navigation
