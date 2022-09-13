import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import userAuthApi from '../../http/userAuthApi';
import userApi from '../../http/userApi';
import type { AuthType, ChangeInfoType, ChangePasswordType, UserPhotoType } from '../../types/types';

export const singIn = createAsyncThunk(
  'user/fetchUser',
  async (data: AuthType) => {
    try {
      const response = await userAuthApi.login(data);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw Error(error.response?.data.message);
      }
      throw Error();
    }
  },
);

export const signUp = createAsyncThunk(
  'user/postUser',
  async (data: AuthType) => {
    try {
      const response = await userAuthApi.registration(data);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw Error(error.response?.data.message);
      }
      throw Error();
    }
  },
);

export const auth = createAsyncThunk(
  'user/auth',
  async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await userAuthApi.checkAuth();
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const changeUserInfo = createAsyncThunk(
  'user/changeUserInfo',
  async (data: ChangeInfoType) => {
    try {
      const response = await userApi.changeInfo(data);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw Error(error.response?.data.message);
      }
      throw Error();
    }
  },
);

export const changeUserPassword = createAsyncThunk(
  'user/changeUserPassword',
  async (data: ChangePasswordType) => {
    try {
      const response = await userApi.changePassword(data);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw Error(error.response?.data.message);
      }
      throw Error();
    }
  },
);

export const uploadUserPhoto = createAsyncThunk(
  'user/uploadUserPhoto',
  async (data: UserPhotoType) => {
    try {
      const response = await userApi.uploadPhoto(data);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw Error(error.response?.data.message);
      }
      throw Error();
    }
  },
);
