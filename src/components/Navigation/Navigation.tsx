import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './Menu.scss'

export type Pages = '/' | 'test' | 'rxjs' | 'css' | 'ts' | 'registration' | 'design-patterns'

// export type CssListForMenu = 'cssFlex' | 'cssGrid' | 'cssPosition' | 'cssSemanticTags' | 'cssDisplay' | 'cssTags' | '/'
// export type CssLayoutList = 'layoutBudget' | '/'
// export type TestList = 'test' | 'testHooks' | 'testTypescript' | 'testEmptyComponent' | 'testTS' | 'testRxjs' | '/'
export interface MenuItemType {
  label?: string
  path: Pages
  active?: boolean
}

type MenuProps = {
  children: React.ReactElement<MenuItemProps>[]
}
export interface MenuItemProps {
  props: MenuItemType
}

export const NavigationItem: React.FC<MenuItemProps> = ({ props }) => {
  const { label, path } = props
  const history = useHistory()
  const goToPage = () => history.push(path)

  return (
    <li key={label}>
      <NavLink to={path} onClick={goToPage}>
        {label}
      </NavLink>
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
