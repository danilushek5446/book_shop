import type { CartInitialType, QueryRequsetType, QueryCartCountUpdateType, ChangeCartResponseType } from '../types/cartTypes';
import host from './index';

const getCart = async (userId: number): Promise<CartInitialType> => {
  const { data } = await host.get(`api/cart/book/${userId}`);

  return data;
};

const addToCart = async (bookId: number): Promise<ChangeCartResponseType> => {
  const { data } = await host.post(`api/cart/add-cart/${bookId}`);

  return data;
};

const deleteOne = async (query: QueryRequsetType) => {
  const { data } = await host.delete('api/cart/', { params: query });

  return data;
};

const deleteMany = async (userId: number) => {
  const { data } = await host.delete(`api/cart/many/${userId}`);

  return data;
};

const updateCount = async (query: QueryCartCountUpdateType): Promise<ChangeCartResponseType> => {
  const { data } = await host.post('api/cart/update-count/', { params: query });

  return data;
};

export default {
  getCart,
  addToCart,
  deleteOne,
  deleteMany,
  updateCount,
};
