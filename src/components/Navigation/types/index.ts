import React from 'react';
import { CssPages, MainPages } from '../../../app/store/adtiveMenuItemReducer';
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
  | '/components'
  | '/data-structure and algorithms';

export type DesignPatterns =
  | 'singleton'
  | 'state'
  | 'builder'
  | 'adapter'
  | 'composite'
  | 'command'
  | 'iterator'
  | 'abstractFactory'
  | 'prototype'
  | 'flyweight'
  | 'bridge';

export type CSS = 'flex' | 'grid' | 'display' | 'position' | 'tags' | 'other';

export type NavigationProps = {
  children: React.ReactElement<MenuItemProps>[];
};

export interface MenuItemProps {
  props: MenuItem<Pages>;
}

export type NavCardProps<T> = {
  title: T;
  desc: string;
};

export interface MenuItem<T extends Pages | CssPages> {
  url: T;
  label?: string;
  active?: boolean;
}

export type DropdownSection<T extends Pages | CssPages> = {
  label: string;
  menuItems: MenuItem<T>[];
};

export type DropdownItemProps = {
  label: string;
  path: string;
  sectionLabel: string;
};

export type DropdownMenuProps = {
  sections: DropdownSection<CssPages>[];
  menuItem: MenuItem<Pages>;
};

export type DropdownSectionProps = DropdownSection<CssPages> & { url: string };
