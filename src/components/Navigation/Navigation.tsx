import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { setActiveMenuItem } from '../../app/store/adtiveMenuItemReducer'
import './Menu.scss'
import { useEffect } from 'react'

export type Pages = '/' | 'test' | 'rxjs' | 'css' | 'ts'

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
  const { label, active, path } = props
  const history = useHistory()
  // const dispatch = useDispatch()

  return (
    <li key={label}>
      <a
        className={active ? 'active' : 'notActive'}
        onClick={() => {
          history.push(path)
        }}
      >
        {label}
      </a>
    </li>
  )
}

const Navigation: React.FC<MenuProps> = ({ children }) => {
  const useActivePage = () => {
    // const dispatch = useDispatch()
    const location = useLocation()
    useEffect(() => {
      const currentPath = location.pathname.substring(1)
    }, [])
  }
  useActivePage()

  return (
    <nav>
      <ul className="menu">{children}</ul>
    </nav>
  )
}

export default Navigation
