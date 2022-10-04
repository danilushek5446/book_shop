import { configureStore } from '@reduxjs/toolkit';

import bookSlice from './book/bookSlice';
import cartSlice from './cart/cartSlice';
import favoriteSlice from './favorite/favoriteSlice';
import userSlice from './user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    book: bookSlice,
    cart: cartSlice,
    favorite: favoriteSlice,
  },
});

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
