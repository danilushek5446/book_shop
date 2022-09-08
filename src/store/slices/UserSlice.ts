import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { singIn, signUp, auth } from '../thunks/userThunk';

export type UserType = {
  email?: string;
  fullName?: string;
  dob?: Date;
};

export const initialState: UserType = {
  email: '',
  fullName: '',
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserType>) => {
      const newUser: UserType = {
        email: action.payload.email,
        fullName: action.payload?.fullName,
        dob: action.payload?.dob,
      };
      state = newUser;
      return { ...state, newUser };
    },

  },
  extraReducers: (builder) => {
    builder.addCase(singIn.fulfilled, (state, action) => {
      return { ...action.payload };
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      return { ...action.payload };
    });

    builder.addCase(auth.fulfilled, (state, action) => {
      return { ...action.payload };
    });
  },
});

export const {
  addUser,
} = UserSlice.actions;

export default UserSlice.reducer;
