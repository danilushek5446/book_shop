import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from '../../http/userAPI';

type UserType = {
  email?: string;
  fullName?: string;
  dob?: Date;
};

type StateType = {
  user: UserType;
};

type AddUserType = {
  email: string;
  fullName?: string;
  dob?: Date;
};

type LoginType = {
  email: string;
  password: string;
};

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (Data: LoginType) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await login(Data);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const initialState: AddUserType = {
  email: '',
  fullName: '',
  dob: new Date(),
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<AddUserType>) => {
      const newUser: UserType = {
        email: action.payload.email,
        fullName: action.payload?.fullName,
        dob: action.payload?.dob,
      };
      return { ...state, newUser };
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      return { ...action.payload };
    });
  },
});

export const {
  addUser,
} = UserSlice.actions;

export default UserSlice.reducer;
