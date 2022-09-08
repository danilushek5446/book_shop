import type { FC } from 'react';
import { useState, useEffect } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { Audio } from 'react-loader-spinner';

import { StyledContainer } from './App.styles';
import SignIn from './components/auth/sigIn/SignIn';
import SignUp from './components/auth/signUp/SignUp';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import UserProfile from './components/userProfile/UserProfile';
import PrivateRoute from './routes/PrivateRoute';
import { useAppDispatch } from './store/hooks';
import { auth } from './store/thunks/userThunk';

const App: FC = () => {
  const [isLoad, setIsLoad] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      if (token) {
        await dispatch(auth());
      }
      setIsLoad(true);
    })();
  }, [dispatch]);

  if (!isLoad) {
    return (
      <Audio
        height="80"
        width="80"
        color="green"
        ariaLabel="loading"
      />
    );
  }
  return (
    <StyledContainer className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/profile"
          element={
            (<PrivateRoute>
              <UserProfile />
             </PrivateRoute>)
          }
        />
      </Routes>
      <Footer />
    </StyledContainer>
  );
};

export default App;
