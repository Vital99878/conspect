import React from 'react'
import { withRouter, useParams, RouteComponentProps } from 'react-router-dom'
import { History } from 'history'

import './Menu.scss'
type CssListForMenu = 'cssFlex' | 'cssGrid' | 'cssPosition' | 'cssSemanticTags' | 'cssDisplay'
interface MenuItemProps {
  props: {
    label: CssListForMenu
    history?: History
  }
}
type MenuProps = {
  children: React.ReactNode[] | React.ReactNode
}

export const MenuItem: React.FC<MenuItemProps> = ({ props }) => {
  const { label, history } = props

  function linkTo(params: any) {
    console.log(params)
  }
  return (
    <li>
      <a className="menu" onClick={() => linkTo(history)}>
        {label}
      </a>
    </li>
  )
}

const Menu: React.FC<MenuProps> = ({ children }) => {
  return (
    <nav>
      <ul className="menu">{children}</ul>
    </nav>
  )
}

export default Menu
