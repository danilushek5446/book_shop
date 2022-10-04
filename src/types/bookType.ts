import type { GenereType } from './filterTypes';

export type BookType = {
  id: number;
  name: string;
  author: string;
  description: string;
  image: string;
  price: number;
  rating?: number;
  cover: string;
  dateOfIssue: string;
  generes: GenereType[];
};

export type CurrentBookType = {
  book?: BookType;
};

export type BookInitialType = {
  booksArray: BookType[];
  currentBook?: BookType;
  count: number;
};

export type QueryBookType = {
  page?: string;
  perPage?: string;
  sortBy?: string;
  sortDirection?: 'ASC' | 'DESC';
  search?: string;
  priceMin?: string;
  priceMax?: string;
  genere?: string;
};
