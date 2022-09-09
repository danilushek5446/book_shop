import { createSlice } from '@reduxjs/toolkit';
import { singIn, signUp, auth, changeUserInfo } from './userThunk';

export type UserType = {
  id: number;
  email: string;
  fullName?: string;
  dob?: Date;
};

interface IUserType {
  user: UserType;
}

export const initialState: IUserType = {
  user: {
    id: 0,
    email: '',
    fullName: '',
    dob: undefined,
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
  },
});

export default UserSlice.reducer;
