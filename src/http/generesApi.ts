import type { GenereType } from '../types/types';
import host from './index';

export const getGeneres = async (): Promise<GenereType[]> => {
  const data = await host.get('api/genere/');

  return data.data.generes;
};
