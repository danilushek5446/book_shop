import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import cartApi from '../../http/cartApi';
import type { QueryCartCountUpdateType, QueryRequsetType } from '../../types/cartTypes';
import { changeBookCount, deleteOneBookInCart } from './cartSlice';

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
      return rejectWithValue(error);
    }
  },
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (bookId: number, { rejectWithValue }) => {
    try {
      const response = await cartApi.addToCart(bookId);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      return rejectWithValue(error);
    }
  },
);

export const deleteOneBook = createAsyncThunk(
  'cart/deleteOneBook',
  async (query: QueryRequsetType, { rejectWithValue, dispatch }) => {
    try {
      const response = await cartApi.deleteOne(query);
      dispatch(deleteOneBookInCart(query.bookId));
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      return rejectWithValue(error);
    }
  },
);

export const checkOut = createAsyncThunk(
  'cart/checkOut',
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await cartApi.deleteMany(userId);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      return rejectWithValue(error);
    }
  },
);

export const changeCount = createAsyncThunk(
  'cart/changeCount',
  async (query: QueryCartCountUpdateType, { rejectWithValue, dispatch }) => {
    try {
      const response = await cartApi.updateCount(query);
      dispatch(changeBookCount({ bookId: query.bookId, count: query.count }));
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      return rejectWithValue(error);
    }
  },
);
