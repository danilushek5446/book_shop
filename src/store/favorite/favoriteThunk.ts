import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import favoriteApi from '../../http/favoriteApi';
import type { QueryRequsetType } from '../../types/cartTypes';
import { deleteOneBookInFavorite } from './favoriteSlice';

export const getUserFavorite = createAsyncThunk(
  'favorite/getUserFavorite',
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await favoriteApi.getFavorite(userId);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      return rejectWithValue(error);
    }
  },
);

export const addToFavorite = createAsyncThunk(
  'favorite/addToFavorite',
  async (bookId: number, { rejectWithValue }) => {
    try {
      const response = await favoriteApi.addToFavorite(bookId);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      return rejectWithValue(error);
    }
  },
);

export const deleteFromFavorite = createAsyncThunk(
  'favorite/deleteFromFavorite',
  async (query: QueryRequsetType, { rejectWithValue, dispatch }) => {
    try {
      const response = await favoriteApi.deleteFavorite(query);
      dispatch(deleteOneBookInFavorite(query.bookId));
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      return rejectWithValue(error);
    }
  },
);
