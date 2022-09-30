import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { addComment, getComments } from '../../http/comments';
import type { CommentsBodyType, CommentsQueryType } from '../../types/types';

export const getAllComments = createAsyncThunk(
  'comments/getAllComments',
  async (query: CommentsQueryType) => {
    try {
      const response = await getComments(query);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw Error(error.response?.data);
      }
      throw Error();
    }
  },
);

export const addCommentToBook = createAsyncThunk(
  'comments/addCommentToBook',
  async (body: CommentsBodyType) => {
    try {
      const response = await addComment(body);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw Error(error.response?.data);
      }
      throw Error();
    }
  },
);
