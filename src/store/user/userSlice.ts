import { createSlice } from '@reduxjs/toolkit';
import type { UserInitialType } from '../../types/types';
import { singIn, signUp, auth, changeUserInfo, changeUserPassword, uploadUserPhoto } from './userThunk';

export const initialState: UserInitialType = {
  user: {
    id: 0,
    email: '',
    fullName: '',
    dob: undefined,
    photo: '',
  },
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(singIn.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(auth.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(changeUserInfo.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(changeUserPassword.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(uploadUserPhoto.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default UserSlice.reducer;
