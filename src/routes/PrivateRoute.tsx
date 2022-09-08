import type { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

type PropType = {
  children: JSX.Element;
};

const PrivateRoute: FC<PropType> = ({ children }) => {
  const location = useLocation();
  const user = useAppSelector((state) => state.user);
  const path = location.pathname;

  if (!user.email) {
    return <Navigate to="/login" state={{ path }} />;
  }

  return children;
};

export default PrivateRoute;
