import type { CartInitialType, CartType, QueryRequsetType, QueryCartCountUpdateType } from '../types/types';
import host from './index';

const getCart = async (userId: number): Promise<CartInitialType> => {
  const { data } = await host.get(`api/cart/book/${userId}`);
  return data;
};

const addToCart = async (bookId: number): Promise<CartType> => {
  const { data } = await host.post(`api/cart/${bookId}`);
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

const updateCount = async (query: QueryCartCountUpdateType): Promise<CartType> => {
  const { data } = await host.delete('api/cart/', { params: query });
  return data;
};

export default {
  getCart,
  addToCart,
  deleteOne,
  deleteMany,
  updateCount,
};
