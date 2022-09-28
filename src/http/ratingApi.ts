import type { RatingParamsType, RatingResponseType } from '../types/types';
import host from './index';

export const setRating = async (params: RatingParamsType): Promise<RatingResponseType> => {
  const { data } = await host.post('api/rating/', { params });
  return data;
};
