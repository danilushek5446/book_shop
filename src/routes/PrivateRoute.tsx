import type { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type PropType = {
  children: JSX.Element;
};

const PrivateRoute: FC<PropType> = ({ children }) => {
  const location = useLocation();
  const auth = false;

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
