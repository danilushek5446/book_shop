import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { getAllBooks, getBooksByIds, getOneBook } from '../../http/bookApi';
import type { QueryBookType } from '../../types/types';

export const getBooks = createAsyncThunk(
  'book/getAllBooks',
  async (query?: QueryBookType) => {
    try {
      const response = await getAllBooks(query);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw Error(error.response?.data);
      }
      throw Error();
    }
  },
);

export const getBookById = createAsyncThunk(
  'book/getBookById',
  async (id: number) => {
    try {
      const response = await getOneBook(id);

      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw Error(error.response?.data);
      }
      throw Error();
    }
  },
);

export const getAllBooksByIds = createAsyncThunk(
  'book/getCartBooks',
  async (booksId: string) => {
    try {
      const response = await getBooksByIds(booksId);

      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw Error(error.response?.data);
      }
      throw Error();
    }
  },
);
