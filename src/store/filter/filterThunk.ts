import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { getGeneres } from '../../http/generesApi';

export const getAllGeneres = createAsyncThunk(
  'filter/getGeneres',
  async () => {
    try {
      const response = await getGeneres();
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw Error(error.response?.data);
      }
      throw Error();
    }
  },
);
