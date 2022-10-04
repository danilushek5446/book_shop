/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import type { BookInitialType } from '../../types/bookType';
import { getAllBooksByIds, getBooks } from './bookThunk';

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

    builder.addCase(getAllBooksByIds.fulfilled, (state, action) => {
      state.booksArray = action.payload.booksArray;
      state.count = action.payload.count;
    });
  },
});

export default bookSlice.reducer;
