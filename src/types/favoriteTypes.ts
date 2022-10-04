export type FavoriteType = {
  id: number;
  userId: number;
  bookId: number;
};

export type FavoriteInitialType = {
  favorite?: FavoriteType[];
};

export type FavoriteAddResponseType = {
  favorite: FavoriteType;
};
