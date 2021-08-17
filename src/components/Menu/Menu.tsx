import React from 'react'
import { useHistory, RouteComponentProps } from 'react-router-dom'
import { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveMenuItem } from '../../app/adtiveMenuItemReducer'
import './Menu.scss'

export type CssListForMenu = 'cssFlex' | 'cssGrid' | 'cssPosition' | 'cssSemanticTags' | 'cssDisplay' | 'cssTags' | '/'
export type CssLayoutList = 'layoutBudget' | 'test' | '/'
export interface MenuItemType {
  label?: string
  path: CssListForMenu | CssLayoutList
  active?: boolean
}
export interface MenuItemProps {
  props: MenuItemType
}
type MenuProps = {
  children: React.ReactElement<MenuItemProps>[]
}

export const MenuItem: React.FC<MenuItemProps> = ({ props }) => {
  const { label, active, path } = props
  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <li key={label}>
      <a
        className={active ? 'active' : 'notActive'}
        onClick={() => {
          history.push(path)
          dispatch(setActiveMenuItem(path))
        }}
      >
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
