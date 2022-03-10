import React from 'react'
import { useRouteMatch, NavLink } from 'react-router-dom'
import {DesignPatterns, CSS} from '../types'

type NavCardProps<T> = {
  title: T
  desc: string
}

/**
 * NavLink из react-router-dom, стилизованный под карточу
 */

const DropdownMenu: React.FC<NavCardProps<CSS | DesignPatterns>> = ({ title, desc }) => {
  const { url } = useRouteMatch()
  return (
    <NavLink to={`${url}/${title}`} className={'nav-card'}>
      <div> {title}</div>
      <div> {desc}</div>
    </NavLink>
  )
}

export default DropdownMenu
