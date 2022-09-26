import type { BookInitialType, CurrentBookType, QueryType } from '../types/types';
import host from './index';

export const getAllBooks = async (query?: QueryType): Promise<BookInitialType> => {
  const { data } = await host.get('api/book/', { params: query });
  return data;
};

export const getOneBook = async (id: number): Promise<CurrentBookType> => {
  const { data } = await host.get(`api/book/${id}`);
  return data;
};
