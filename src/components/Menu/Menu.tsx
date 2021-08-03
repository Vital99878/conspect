import React from 'react'
import { useHistory } from 'react-router-dom'
import './Menu.scss'

type CssListForMenu = 'cssFlex' | 'cssGrid' | 'cssPosition' | 'cssSemanticTags' | 'cssDisplay' | 'cssTags' | '/'
interface MenuItemProps {
  props: {
    label: CssListForMenu
    active?: boolean
  }
}
type MenuProps = {
  children: React.ReactElement<MenuItemProps>[]
}
export const MenuItem: React.FC<MenuItemProps> = ({ props }) => {
  const { label, active } = props
  const history = useHistory()
  return (
    <li key={label}>
      <a className={active ? 'active' : 'notActive'} onClick={() => history.push(label)}>
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
