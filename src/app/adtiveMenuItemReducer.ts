import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItemType } from '../components/Menu/Menu'

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
    { label: 'Test Component NO TS', path: 'testNoTs' },
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
        } else {
          delete menuItem.active
        }
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { setActiveMenuItem } = activeMenuItemReducer.actions

export default activeMenuItemReducer.reducer
