import type { ThunkAction, Action } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filter/filterSlice';
import UserSlice from './user/userSlice';

export const store = configureStore({
  reducer: {
    user: UserSlice,
    filter: filterSlice,
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
