import React, {useState} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {MenuItemType} from '../../models/Nagation';
import DropdownMenu from '../DropdownMenu';
import '../../Navigation.scss'

export type TNavigationItemProps = {
  props: MenuItemType
}

export const NavigationItem: React.FC<TNavigationItemProps> = ({ props }) => {
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
        {/* <DropdownMenu/>*/}
    </li>
  )
}


export default NavigationItem
