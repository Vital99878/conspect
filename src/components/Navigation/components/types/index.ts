import React from 'react'
// export type CssListForMenu = 'cssFlex' | 'cssGrid' | 'cssPosition' | 'cssSemanticTags' | 'cssDisplay' | 'cssTags' | '/'
// export type CssLayoutList = 'layoutBudget' | '/'
// export type TestList = 'test' | 'testHooks' | 'testTypescript' | 'testEmptyComponent' | 'testTS' | 'testRxjs' | '/'

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


export type DesignPatterns =
  | 'singleton'
  | 'state'
  | 'builder'
  | 'adapter'
  | 'composite'
  | 'command'
  | 'iterator'
  | 'prototype'

export type CSS = 'flex' | 'grid' | 'display' | 'position' | 'tags' | 'other'

export type NavigationProps = {
  children: React.ReactElement<MenuItemProps>[]
}

export interface MenuItemProps {
  props: MenuItem
}

export type NavCardProps<T> = {
  title: T
  desc: string
}

export interface MenuItem {
  page: Pages
  label?: string
  active?: boolean
}
