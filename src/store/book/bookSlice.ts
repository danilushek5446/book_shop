/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { BookInitialType, GenereType } from '../../types/types';
import { getBooks } from './bookThunk';

export const initialState: BookInitialType = {
  booksArray: [],
  count: 0,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.booksArray = action.payload.booksArray;
      state.count = action.payload.count;
    });
  },
});

export default bookSlice.reducer;
