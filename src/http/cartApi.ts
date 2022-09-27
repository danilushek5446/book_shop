import type { CartInitialType, CartType, QueryCartCountUpdateType, QueryCartType } from '../types/types';
import host from './index';

const getCart = async (userId: number): Promise<CartInitialType> => {
  const { data } = await host.get(`api/cart/book/${userId}`);
  return data;
};

const addToCart = async (query: QueryCartType): Promise<CartType> => {
  const { data } = await host.get('api/cart/}', { params: { query } });
  return data;
};

const deleteOne = async (query: QueryCartType) => {
  const { data } = await host.delete('api/cart/}', { params: { query } });
  return data;
};

const deleteMany = async (userId: number) => {
  const { data } = await host.delete(`api/cart/${userId}}`);
  return data;
};

const updateCount = async (query: QueryCartCountUpdateType): Promise<CartType> => {
  const { data } = await host.delete('api/cart/', { params: { query } });
  return data;
};

export default {
  getCart,
  addToCart,
  deleteOne,
  deleteMany,
  updateCount,
};
