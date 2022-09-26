/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { BookInitialType } from '../../types/types';
import { getBookById, getBooks } from './bookThunk';

export const initialState: BookInitialType = {
  booksArray: [],
  currentBook: undefined,
  count: 0,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.booksArray = action.payload.booksArray;
      state.count = action.payload.count;
    });

    builder.addCase(getBookById.fulfilled, (state, action) => {
      state.currentBook = action.payload.book;
    });
  },
});

export default bookSlice.reducer;
