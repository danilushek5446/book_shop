import type { BookInitialType, CurrentBookType, QueryBookType } from '../types/types';
import host from './index';

export const getAllBooks = async (query?: QueryBookType): Promise<BookInitialType> => {
  const { data } = await host.get('api/book/', { params: query });
  return data;
};

export const getOneBook = async (id: number): Promise<CurrentBookType> => {
  const { data } = await host.get(`api/book/one/${id}`);
  return data;
};

export const getBooksByIds = async (booksId: string): Promise<BookInitialType> => {
  const { data } = await host.get('api/book/many/', { params: { booksId } });
  return data;
};
