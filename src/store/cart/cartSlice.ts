/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { CartInitialType } from '../../types/cartTypes';
import { addToCart, getUserCart } from './cartThunk';

export const initialState: CartInitialType = {
  cart: undefined,
};

type PayloadActionType = {
  bookId: number;
  count: number;
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
    changeBookCount: (state, action: PayloadAction<PayloadActionType>) => {
      if (state.cart) {
        const index = state.cart.findIndex((item) => item.bookId === action.payload.bookId);

        if (index !== -1) {
          state.cart[index].count += action.payload.count;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserCart.fulfilled, (state, action) => {
      state.cart = action.payload.cart;
    });

    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cart?.push(action.payload.cart);
    });
  },
});

export const {
  deleteOneBookInCart,
  changeBookCount,
} = cartSlice.actions;

export default cartSlice.reducer;
