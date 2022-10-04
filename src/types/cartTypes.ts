export type CartType = {
  id: number;
  userId: number;
  bookId: number;
  count: number;
};

export type ChangeCartResponseType = {
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
