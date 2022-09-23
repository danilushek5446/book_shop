/* eslint-disable react-hooks/exhaustive-deps */
import type { FC } from 'react';
import { useState, useEffect } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { Audio } from 'react-loader-spinner';

import { StyledContainer } from './App.styles';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import UserProfile from './pages/userProfile/userProfile/UserProfile';
import PrivateRoute from './routes/PrivateRoute';
import { useAppDispatch } from './store/hooks';
import { auth } from './store/user/userThunk';
import Ad from './components/ad/Ad';
import Authad from './components/AuthAd/Authad';
import Filters from './components/filters/mainFilters/Filters';
import SignIn from './pages/authPage/auth/sigIn/SignIn';
import SignUp from './pages/authPage/auth/signUp/SignUp';
import { getAllGeneres } from './store/filter/filterThunk';
import BookCatalog from './components/Book/bookCatalog/BookCatalog';

const App: FC = () => {
  const [isLoad, setIsLoad] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getAllGeneres());
        const token = localStorage.getItem('token');
        if (token) {
          await dispatch(auth());
        }
      } catch (error) {
        alert(error);
      } finally {
        setIsLoad(true);
      }
    })();
  }, []);

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
        <Route path="/" element={
          (<>
            <Ad />
            <Filters />
            <BookCatalog />
            <Authad />
           </>)}
        />
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
