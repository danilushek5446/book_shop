import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import userAuthApi from '../../http/userAuthApi';
import userApi from '../../http/userApi';
import type { AuthType, ChangeInfoType, ChangePasswordType, UserPhotoType } from '../../types/userTypes';

export const singIn = createAsyncThunk(
  'user/fetchUser',
  async (data: AuthType, { rejectWithValue }) => {
    try {
      const response = await userAuthApi.login(data);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      throw Error();
    }
  },
);

export const signUp = createAsyncThunk(
  'user/postUser',
  async (data: AuthType, { rejectWithValue }) => {
    try {
      const response = await userAuthApi.registration(data);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      return rejectWithValue('unexpected error');
    }
  },
);

export const auth = createAsyncThunk(
  'user/auth',
  async () => {
    try {
      const response = await userAuthApi.checkAuth();
      return response;
    } catch (error) {
      throw Error('authorization error');
    }
  },
);

export const changeUserInfo = createAsyncThunk(
  'user/changeUserInfo',
  async (data: ChangeInfoType, { rejectWithValue }) => {
    try {
      const response = await userApi.changeInfo(data);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      return rejectWithValue('unexpected error');
    }
  },
);

export const changeUserPassword = createAsyncThunk(
  'user/changeUserPassword',
  async (data: ChangePasswordType, { rejectWithValue }) => {
    try {
      const response = await userApi.changePassword(data);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      return rejectWithValue('unexpected error');
    }
  },
);

export const uploadUserPhoto = createAsyncThunk(
  'user/uploadUserPhoto',
  async (data: UserPhotoType, { rejectWithValue }) => {
    try {
      const response = await userApi.uploadPhoto(data);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      return rejectWithValue('unexpected error');
    }
  },
);
