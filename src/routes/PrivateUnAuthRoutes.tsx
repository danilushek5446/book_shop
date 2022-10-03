import type { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../store/hooks';

type PropType = {
  children: JSX.Element;
};

const PrivateRoute: FC<PropType> = ({ children }) => {
  const user = useAppSelector((state) => state.user.user);

  if (user.email) {
    return <Navigate to="/profile" />;
  }

  return children;
};

export default PrivateRoute;
