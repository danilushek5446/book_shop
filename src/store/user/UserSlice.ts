import { createSlice } from '@reduxjs/toolkit';
import type { IUserType } from '../../types/types';
import { singIn, signUp, auth, changeUserInfo, changeUserPassword, uploadUserPhoto } from './userThunk';

export const initialState: IUserType = {
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

    builder.addCase(singIn.rejected, (state, action) => {
      throw action.error;
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(signUp.rejected, (state, action) => {
      throw action.error;
    });

    builder.addCase(auth.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(changeUserInfo.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(changeUserInfo.rejected, (state, action) => {
      throw action.error;
    });

    builder.addCase(changeUserPassword.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(changeUserPassword.rejected, (state, action) => {
      throw action.error;
    });

    builder.addCase(uploadUserPhoto.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(uploadUserPhoto.rejected, (state, action) => {
      throw action.error;
    });
  },
});

export default UserSlice.reducer;
