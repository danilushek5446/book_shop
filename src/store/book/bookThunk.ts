import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { getAllBooks, getOneBook } from '../../http/bookApi';
import type { QueryType } from '../../types/types';

export const getBooks = createAsyncThunk(
  'book/getAllBooks',
  async (query?: QueryType) => {
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
