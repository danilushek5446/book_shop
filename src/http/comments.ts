import type { AddCommentResponseType, CommentsBodyType, CommentsInitialType, CommentsQueryType } from '../types/types';
import host from './index';

export const getComments = async (query: CommentsQueryType): Promise<CommentsInitialType> => {
  const { data } = await host.get('api/comments/', { params: query });
  return data;
};

export const addComment = async (body: CommentsBodyType): Promise<AddCommentResponseType> => {
  const { data } = await host.post('api/comments/', { body });
  return data;
};
