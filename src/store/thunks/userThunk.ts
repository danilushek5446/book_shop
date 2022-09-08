import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkAuth, login, registration } from '../../http/userAPI';

type AuthType = {
  email: string;
  password: string;
};

export const singIn = createAsyncThunk(
  'user/fetchUser',
  async (Data: AuthType) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await login(Data);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const signUp = createAsyncThunk(
  'user/postUser',
  async (Data: AuthType) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await registration(Data);
      return response;
    } catch (error) {
      throw error;
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
