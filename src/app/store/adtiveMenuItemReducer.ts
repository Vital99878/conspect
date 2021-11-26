import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TNavigation, TNavLabels} from '../../components/Navigation/models/Nagation';

const initialState: TNavigation = {
    Home: {
      label: 'Home',
      active: false,
      path: '',
    },
    Css: {
      label: 'Css',
      active: false,
      path: 'css',
    },
    Test: {
      label: 'Test',
      active: false,
      path: 'test',
    },
    RXjs: {
      label: 'RXjs',
      path: 'RXjs',
      active: false,
    },
}

export const activeMenuItemReducer = createSlice({
  name: 'activeMenu',
    initialState,
  reducers: {
    setActiveMenuItem: (state, action: PayloadAction<TNavLabels>) => {
        const activeItem = {...initialState[action.payload]}
        activeItem.active = true;
        return {...initialState, ...{[action.payload]: activeItem}}
    },
  },
})

// Action creators are generated for each case reducer function
export const { setActiveMenuItem } = activeMenuItemReducer.actions

export default activeMenuItemReducer.reducer
