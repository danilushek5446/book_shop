import type { GenereType } from '../types/filterTypes';
import host from './index';

export const getGeneres = async (): Promise<GenereType[]> => {
  const { data } = await host.get('api/genere/');

  return data.generes;
};
