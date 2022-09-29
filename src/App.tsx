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
import PrivateProfileRoute from './routes/PrivateProfileRoute';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { auth } from './store/user/userThunk';
import Ad from './components/ad/Ad';
import Authad from './components/AuthAd/Authad';
import Filters from './components/filters/mainFilters/Filters';
import SignIn from './pages/authPage/auth/sigIn/SignIn';
import SignUp from './pages/authPage/auth/signUp/SignUp';
import { getAllGeneres } from './store/filter/filterThunk';
import BookCatalog from './pages/Book/bookCatalog/BookCatalog';
import PrivateAuthRoute from './routes/PrivateAuthRoute';
import BookPage from './pages/Book/bookPage/BookPage';
import Cart from './pages/cartPage/Cart';
import Favorite from './pages/favoritePage/Favorite';

const App: FC = () => {
  const [isLoad, setIsLoad] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

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
            {!user.email && <Authad />}
           </>)}
        />
        <Route path="/login" element={
          (<PrivateAuthRoute>
            <SignIn />
           </PrivateAuthRoute>)
          }
        />
        <Route path="/signUp" element={
          (<PrivateAuthRoute>
            <SignUp />
           </PrivateAuthRoute>)
          }
        />
        <Route path="/bookPage/:id" element={<BookPage />} />
        <Route path="/profile"
          element={
            (<PrivateProfileRoute>
              <UserProfile />
             </PrivateProfileRoute>)
          }
        />
        <Route path="/cart"
          element={
            (<PrivateProfileRoute>
              <Cart />
             </PrivateProfileRoute>)
          }
        />
        <Route path="/favorite"
          element={
            (<PrivateProfileRoute>
              <Favorite />
             </PrivateProfileRoute>)
          }
        />
      </Routes>
      <Footer />
    </StyledContainer>
  );
};

export default App;
