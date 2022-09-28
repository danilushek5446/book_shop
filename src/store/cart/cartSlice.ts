/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { CartInitialType } from '../../types/types';
import { deleteOneBook, getUserCart } from './cartThunk';

export const initialState: CartInitialType = {
  cart: undefined,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    deleteOneBookInCart: (state, action: PayloadAction<number>) => {
      if (state.cart) {
        const index = state.cart.findIndex((item) => {
          if (item.bookId === action.payload) {
            return true;
          }
          return false;
        });
        state.cart.splice(index, 1);
      }
    },
    deleteAllBooksInCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserCart.fulfilled, (state, action) => {
      state.cart = action.payload.cart;
    });
  },
});

export const {
  deleteOneBookInCart,
} = cartSlice.actions;

export default cartSlice.reducer;
