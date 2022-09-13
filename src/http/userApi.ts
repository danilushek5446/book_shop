import type { UserType, ChangeInfoType, ChangePasswordType, UserPhotoType } from '../types/types';
import host from './index';

const changeInfo = async (request: ChangeInfoType): Promise<UserType> => {
  const data = await host.patch('api/user/', request);

  return data.data.user;
};

const changePassword = async (request: ChangePasswordType): Promise<UserType> => {
  const data = await host.patch('api/user/change-password', request);

  return data.data.user;
};

const uploadPhoto = async (request: UserPhotoType): Promise<UserType> => {
  const data = await host.patch('api/user/photo', request);

  return data.data.user;
};

export default {
  changeInfo,
  changePassword,
  uploadPhoto,
};
