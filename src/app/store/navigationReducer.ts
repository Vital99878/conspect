import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TNavigation, TNavLabels} from '../../components/Navigation/models/Navigation.model';
import {TNavItem} from '../../components/Navigation/models/Navigation.model';

const testDropdown: TNavItem[]= [
    {
    label: 'Test',
    active: false,
    path: 'test_1',
}, {
    label: 'Test',
    active: false,
    path: 'test_2',
}]

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
      dropdown: testDropdown
    },
    RXjs: {
      label: 'RXjs',
      path: 'RXjs',
      active: false,
    },
}

export const navigationReducer = createSlice({
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
export const { setActiveMenuItem } = navigationReducer.actions

export default navigationReducer.reducer
