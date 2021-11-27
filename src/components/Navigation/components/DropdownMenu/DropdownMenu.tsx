import React from 'react'
import './DropdownMenu.scss'
import {TNavItem} from '../../models/Navigation.model';
import {useHistory, useLocation} from 'react-router-dom';

type TDropdownProps = {
    items: TNavItem [],
    className: string
}

export const DropdownMenu: React.FC<TDropdownProps> = ({items, className }) => {
    const {pathname} = useLocation()
    const history = useHistory()

    return (
        <ul className={className}>
            {items.map((item) => {
                return (
                    <li key={item.path} >
                        <a className={(pathname === `/${item.path}`) ? 'dropdownItem--active' : ''}
                           onClick={() => history.push(item.path)}> {item.label} </a>
                    </li>
                )
            })}
        </ul>
      )
}

export default DropdownMenu
