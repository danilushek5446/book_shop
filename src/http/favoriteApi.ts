import type { QueryRequsetType } from '../types/cartTypes';
import type { FavoriteAddResponseType, FavoriteInitialType } from '../types/favoriteTypes';
import host from './index';

const getFavorite = async (userId: number): Promise<FavoriteInitialType> => {
  const { data } = await host.get(`api/favorite/book/${userId}`);

  return data;
};

const addToFavorite = async (bookId: number): Promise<FavoriteAddResponseType> => {
  const { data } = await host.post(`api/favorite/${bookId}`);

  return data;
};

const deleteFavorite = async (query: QueryRequsetType) => {
  const { data } = await host.delete('api/favorite/', { params: query });

  return data;
};

export default {
  getFavorite,
  addToFavorite,
  deleteFavorite,
};
