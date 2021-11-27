import React, {useState} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {TNavItem} from '../../models/Navigation.model';
import DropdownMenu from '../DropdownMenu';
import '../../Navigation.scss'

export type TNavigationItemProps = {
  props: TNavItem
}

export const NavigationItem: React.FC<TNavigationItemProps> = ({ props }) => {
    const {pathname} = useLocation()
    const history = useHistory()

  return (
    <li key={props.label} className='nav-item'>
      <a className={(pathname === `/${props.path}`) ? 'active' : 'notActive'}
            onClick={() => {
 history.push(props.path)
}}>
        {props.label}
      </a>
        {props.dropdown && <DropdownMenu items={props.dropdown} className='dropdown-list'/>}
    </li>
  )
}


export default NavigationItem
