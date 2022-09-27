/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { CartInitialType } from '../../types/types';
import { getUserCart } from './cartThunk';

export const initialState: CartInitialType = {
  cart: undefined,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserCart.fulfilled, (state, action) => {
      state.cart = action.payload.cart;
    });
  },
});

export default cartSlice.reducer;
