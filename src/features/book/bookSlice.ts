import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface BookState {
  title: string;
  page: number;
}

const initialState: BookState = {
  title: 'English',
  page: 1,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    prevPage: (state) => {
      state.page -= 1;
    },
  },
});

export const { nextPage, prevPage } = bookSlice.actions;

export const selectBook = (state: RootState) => state.book.page;
export default bookSlice.reducer;
