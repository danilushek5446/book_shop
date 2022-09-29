/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { FavoriteInitialType } from '../../types/types';
import { getUserFavorite } from './favoriteThunk';

export const initialState: FavoriteInitialType = {
  favorite: undefined,
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    deleteOneBookInFavorite: (state, action: PayloadAction<number>) => {
      if (state.favorite) {
        const index = state.favorite.findIndex((item) => item.bookId === action.payload);
        state.favorite.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserFavorite.fulfilled, (state, action) => {
      state.favorite = action.payload.favorite;
    });
  },
});

export const {
  deleteOneBookInFavorite,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
