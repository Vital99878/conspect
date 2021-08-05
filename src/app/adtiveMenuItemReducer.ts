import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
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
      state.menuItems
    },
  },
})

// Action creators are generated for each case reducer function
export const { setActiveMenuItem } = activeMenuItemReducer.actions

export default activeMenuItemReducer.reducer
