export type PriceType = {
  minPrice: number;
  maxPrice: number;
};

export type SortDirectionType = {
  id: number;
  sortBy: string;
  checked: boolean;
};

export type GenereType = {
  id: number;
  name: string;
  checked?: boolean;
};

export type FilterInitialType = {
  page: number;
  search: string;
  genere: GenereType[];
  price: PriceType;
  sortDirection: SortDirectionType[];
};

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

export type CartType = {
  id: number;
  userId: number;
  bookId: number;
  count: number;
};

export type ChangeCountResponseType = {
  cart: CartType;
};

export type CartInitialType = {
  cart?: CartType[];
};

export type QueryCartType = {
  userId: number;
  bookId: number;
  count: number;
};

export type QueryRequsetType = {
  userId: number;
  bookId: number;
};

export type QueryCartCountUpdateType = {
  bookId: number;
  userId: number;
  count: number;
};

export type RatingParamsType = {
  bookId: number;
  rate: number;
};

export type RatingResponseType = {
  rating: number;
};

export type FavoriteType = {
  id: number;
  userId: number;
  bookId: number;
};

export type FavoriteInitialType = {
  favorite?: CartType[];
};

export type CommentType = {
  id: number;
  userId: number;
  bookId: number;
  comment: string;
  dateOfPost: Date;
};

export type AddCommentResponseType = {
  newComment: CommentType;
};

export type CommentsInitialType = {
  commentArray: CommentType[];
  count: number;
};

export type CommentsQueryType = {
  bookId: number;
  page?: string;
  perPage?: string;
};

export type CommentsBodyType = {
  bookId: number;
  comment: string;
};
