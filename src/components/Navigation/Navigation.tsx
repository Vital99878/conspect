import React, {useState} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {MenuItemType} from './models/Nagation';
import DropdownMenu from '../DropdownMenu';
import './Navigation.scss'

type MenuProps = {
  children: React.ReactElement<MenuItemProps>[]
}
export interface MenuItemProps {
  props: MenuItemType
}

export const NavigationItem: React.FC<MenuItemProps> = ({ props }) => {
    const {pathname} = useLocation()
    const history = useHistory()

  return (
    <li key={props.label}>
      <a
        className={(pathname === `/${props.path}`) ? 'active' : 'notActive'}
        onClick={() => {
          history.push(props.path)
        }}
      >
        {props.label}
      </a>
        {/*<DropdownMenu/>*/}
    </li>
  )
}

const Navigation: React.FC<MenuProps> = ({ children }) => {
  return (
    <nav>
      <ul className="menu">{children}</ul>
    </nav>
  )
}

export default Navigation
