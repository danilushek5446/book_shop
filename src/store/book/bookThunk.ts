import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { getAllBooks, getBooksByIds, getOneBook } from '../../http/bookApi';
import type { QueryBookType } from '../../types/types';

export const getBooks = createAsyncThunk(
  'book/getAllBooks',
  async (query: QueryBookType, { rejectWithValue }) => {
    try {
      const response = await getAllBooks(query);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      return rejectWithValue(error);
    }
  },
);

export const getBookById = createAsyncThunk(
  'book/getBookById',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await getOneBook(id);

      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      return rejectWithValue(error);
    }
  },
);

export const getAllBooksByIds = createAsyncThunk(
  'book/getCartBooks',
  async (booksId: string, { rejectWithValue }) => {
    try {
      const response = await getBooksByIds(booksId);

      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data);
      }
      return rejectWithValue(error);
    }
  },
);
