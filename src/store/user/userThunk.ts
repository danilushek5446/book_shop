import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { changeInfo, changePassword, checkAuth, login, registration } from '../../http/userAPI';
import type { AuthType, ChangeInfoType, ChangePasswordType } from '../../types/types';

export const singIn = createAsyncThunk(
  'user/fetchUser',
  async (data: AuthType) => {
    try {
      const response = await login(data);
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
      const response = await registration(data);
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
      const response = await checkAuth();
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
      const response = await changeInfo(data);
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
      const response = await changePassword(data);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw Error(error.response?.data.message);
      }
      throw Error();
    }
  },
);
