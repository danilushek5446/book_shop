import type { ThunkAction, Action } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './book/bookSlice';
import filterSlice from './filter/filterSlice';
import userSlice from './user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    filter: filterSlice,
    book: bookSlice,
  },
});

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  Action<string>
>;
