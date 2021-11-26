import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TNavigation, TNavLabels} from '../../components/Navigation/models/Nagation';

export const initialNavigation: TNavigation = {
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
    initialState: initialNavigation,
  reducers: {
    setActiveMenuItem: (state, action: PayloadAction<TNavLabels>) => {
        const activeItem = {...initialNavigation[action.payload]}
        activeItem.active = true;
        return {...initialNavigation, ...{[action.payload]: activeItem}}
    },
  },
})

// Action creators are generated for each case reducer function
export const { setActiveMenuItem } = activeMenuItemReducer.actions

export default activeMenuItemReducer.reducer
