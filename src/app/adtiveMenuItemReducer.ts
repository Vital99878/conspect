import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CssListForMenu } from '../components/Menu/Menu'
type menuItem = {
  label: CssListForMenu
  active?: boolean
}
type InitialState = {
  menuItems: menuItem[]
}

const initialState: InitialState = {
  menuItems: [
    { label: '/', active: true },
    { label: 'cssDisplay' },
    { label: 'cssPosition' },
    { label: 'cssFlex' },
    { label: 'cssGrid' },
    { label: 'cssTags' },
  ],
}

export const activeMenuItemReducer = createSlice({
  name: 'activeMenu',
  initialState,
  reducers: {
    setActiveMenuItem: (state, action: PayloadAction<string>) => {
      state.menuItems.map((menuItem) => {
        if (menuItem.label === action.payload) {
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
