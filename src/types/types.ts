export type AuthType = {
  email: string;
  password: string;
};

export type UserType = {
  id: number;
  email: string;
  fullName?: string;
  dob?: Date;
  photo?: string;
};

export type UserInitialType = {
  user: UserType;
};

export type ChangeInfoType = {
  email: string;
  fullName?: string;
};

export type ChangePasswordType = {
  oldPassword: string;
  newPassword: string;
};

export type UserRegistrationType = {
  email: string;
  password: string;
  confirmPass: string;
};

export type UserChangePasswordType = {
  oldPassword: string;
  newPassword: string;
  confirmPass: string;
};

export type UserPhotoType = {
  photo: string | ArrayBuffer;
};

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

export type BookInitialType = {
  booksArray: BookType[];
  count: number;
};

export type QueryType = {
  page?: string;
  perPage?: string;
  sortBy?: string;
  sortDirection?: 'ASC' | 'DESC';
  search?: string;
  priceMin?: string;
  priceMax?: string;
  genere?: string;
};
