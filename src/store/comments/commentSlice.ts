/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import type { CommentsInitialType } from '../../types/types';
import { addCommentToBook, getAllComments } from './commentThunk';

export const initialState: CommentsInitialType = {
  commentArray: [],
  count: 0,
};

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllComments.fulfilled, (state, action) => {
      state.commentArray = action.payload.commentArray;
      state.count = action.payload.count;
    });

    builder.addCase(addCommentToBook.fulfilled, (state, action) => {
      state.commentArray.push(action.payload.newComment);
    });
  },
});

export default commentSlice.reducer;
