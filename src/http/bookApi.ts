import type { BookInitialType, QueryType } from '../types/types';
import host from './index';

export const getAllBooks = async (query?: QueryType): Promise<BookInitialType> => {
  const data = await host.get('api/book/', { params: query });
  return data.data;
};
