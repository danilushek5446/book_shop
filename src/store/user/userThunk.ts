import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { changeInfo, checkAuth, login, registration } from '../../http/userAPI';

export type AuthType = {
  email: string;
  password: string;
};

export type ChangeInfoType = {
  email: string;
  fullName?: string;
};

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
    // eslint-disable-next-line no-useless-catch
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
