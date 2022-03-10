import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './Menu.scss'

export type Pages =
  | '/'
  | '/test'
  | '/rxjs'
  | '/css'
  | '/ts'
  | '/registration'
  | '/design-patterns'
  | '/preparation'
  | '/data-structure and algorithms'

// export type CssListForMenu = 'cssFlex' | 'cssGrid' | 'cssPosition' | 'cssSemanticTags' | 'cssDisplay' | 'cssTags' | '/'
// export type CssLayoutList = 'layoutBudget' | '/'
// export type TestList = 'test' | 'testHooks' | 'testTypescript' | 'testEmptyComponent' | 'testTS' | 'testRxjs' | '/'
export interface MenuItemType {
  label?: string
  page: Pages
  active?: boolean
}

type MenuProps = {
  children: React.ReactElement<MenuItemProps>[]
}
export interface MenuItemProps {
  props: MenuItemType
}

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

const Navigation: React.FC<MenuProps> = ({ children }) => {
  return (
    <nav>
      <ul className="menu">{children}</ul>
    </nav>
  )
}

export default Navigation
