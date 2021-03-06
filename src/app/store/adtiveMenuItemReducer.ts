import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItemType } from '../../components/Navigation/Navigation'

type InitialState = {
  menuItems: MenuItemType[]
}

const initialState: InitialState = {
  menuItems: [
    { label: 'Home', path: '/', active: true },
    { label: 'CSS: Display', path: 'cssDisplay' },
    { label: 'CSS: Position', path: 'cssPosition' },
    { label: 'CSS: Flex', path: 'cssFlex' },
    { label: 'CSS: Grid', path: 'cssGrid' },
    { label: 'CSS: Tags', path: 'cssTags' },
    { label: 'Layout: Budget', path: 'layoutBudget' },
    { label: 'Test Component', path: 'test' },
    { label: 'Test Hooks', path: 'testHooks' },
    { label: 'Test Typescript', path: 'testTypescript' },
    { label: 'Empty Test Component', path: 'testEmptyComponent' },
    { label: 'TS Learn', path: 'testTS' },
    { label: 'Rxjs Learn', path: 'testRxjs' },
  ],
}

export const activeMenuItemReducer = createSlice({
  name: 'activeMenu',
  initialState,
  reducers: {
    setActiveMenuItem: (state, action: PayloadAction<string>) => {
      state.menuItems.map((menuItem) => {
        if (menuItem.path === action.payload) {
          menuItem.active = true
        } else delete menuItem.active
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { setActiveMenuItem } = activeMenuItemReducer.actions

export default activeMenuItemReducer.reducer
