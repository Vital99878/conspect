import React from 'react'
import { useRouteMatch, NavLink, useHistory } from 'react-router-dom'
import {MenuItemProps} from '../types'


type NavCardProps<T> = {
  title: T
  desc: string
}

/**
 * NavLink из react-router-dom, стилизованный под карточу
 */

export const NavigationItem: React.FC<MenuItemProps> = ({ props }) => {
  const { label, page } = props
  const history = useHistory()
  const goToPage = () => history.push(page)

  return (
    <li key={label}>
      <NavLink to={page} onClick={goToPage}>
        {label}
      </NavLink>
    </li>
  )
}
export default NavigationItem
