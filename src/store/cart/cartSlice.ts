/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { CartInitialType } from '../../types/types';
import { addToCart, changeCount, getUserCart } from './cartThunk';

export const initialState: CartInitialType = {
  cart: undefined,
};

type PricePayloadType = {
  count: number;
  index: number;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    deleteOneBookInCart: (state, action: PayloadAction<number>) => {
      if (state.cart) {
        const index = state.cart.findIndex((item) => item.bookId === action.payload);
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

    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cart?.push(action.payload);
    });

    builder.addCase(changeCount.fulfilled, (state, action) => {
      if (state.cart) {
        const index = state.cart.findIndex((item) => item.id === action.payload.cart.id);

        if (index !== -1) {
          state.cart[index] = action.payload.cart;
        }
      }
    });
  },
});

export const {
  deleteOneBookInCart,
} = cartSlice.actions;

export default cartSlice.reducer;
