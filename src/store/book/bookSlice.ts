/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { BookInitialType } from '../../types/types';
import { getAllBooksByIds, getBookById, getBooks } from './bookThunk';

export const initialState: BookInitialType = {
  booksArray: [],
  currentBook: undefined,
  count: 0,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    changeCurrentRate: (state, action: PayloadAction<number>) => {
      if (state.currentBook) {
        state.currentBook.rating = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.booksArray = action.payload.booksArray;
      state.count = action.payload.count;
    });

    builder.addCase(getAllBooksByIds.fulfilled, (state, action) => {
      state.booksArray = action.payload.booksArray;
      state.count = action.payload.count;
    });

    builder.addCase(getBookById.fulfilled, (state, action) => {
      state.currentBook = action.payload.book;
    });
  },
});

export const {
  changeCurrentRate,
} = bookSlice.actions;

export default bookSlice.reducer;
