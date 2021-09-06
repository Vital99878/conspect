import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setActiveMenuItem } from '../../app/adtiveMenuItemReducer'
import './Menu.scss'
import { useEffect } from 'react'
import { useState } from 'react'

export type CssListForMenu = 'cssFlex' | 'cssGrid' | 'cssPosition' | 'cssSemanticTags' | 'cssDisplay' | 'cssTags' | '/'
export type CssLayoutList = 'layoutBudget' | '/'
export type TestList = 'test' | 'testHooks' | 'testTypescript' | 'testEmptyComponent' | '/'
export interface MenuItemType {
  label?: string
  path: CssListForMenu | CssLayoutList | TestList
  active?: boolean
}
type MenuProps = {
  children: React.ReactElement<MenuItemProps>[]
}
export interface MenuItemProps {
  props: MenuItemType
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
  const useActiveMenuPath = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    useEffect(() => {
      const currentPath = location.pathname.substring(1)
      dispatch(setActiveMenuItem(currentPath))
    }, [])
  }
  useActiveMenuPath()

  return (
    <nav>
      <ul className="menu">{children}</ul>
    </nav>
  )
}

export default Menu
