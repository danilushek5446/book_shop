import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import cartApi from '../../http/cartApi';
import type { QueryCartCountUpdateType, QueryCartType } from '../../types/types';

export const getUserCart = createAsyncThunk(
  'cart/getUserCart',
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await cartApi.getCart(userId);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      throw Error();
    }
  },
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (query: QueryCartType, { rejectWithValue }) => {
    try {
      const response = await cartApi.addToCart(query);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      throw Error();
    }
  },
);

export const deleteOneBook = createAsyncThunk(
  'cart/deleteOneBook',
  async (query: QueryCartType, { rejectWithValue }) => {
    try {
      const response = await cartApi.deleteOne(query);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      throw Error();
    }
  },
);

export const checkOut = createAsyncThunk(
  'cart/checkOut',
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await cartApi.getCart(userId);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      throw Error();
    }
  },
);

export const changeCount = createAsyncThunk(
  'cart/changeCount',
  async (query: QueryCartCountUpdateType, { rejectWithValue }) => {
    try {
      const response = await cartApi.updateCount(query);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      throw Error();
    }
  },
);
