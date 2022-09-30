import { configureStore } from '@reduxjs/toolkit';

import bookSlice from './book/bookSlice';
import cartSlice from './cart/cartSlice';
import commentSlice from './comments/commentSlice';
import favoriteSlice from './favorite/favoriteSlice';
import filterSlice from './filter/filterSlice';
import userSlice from './user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    filter: filterSlice,
    book: bookSlice,
    cart: cartSlice,
    favorite: favoriteSlice,
    comments: commentSlice,
  },
});

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
