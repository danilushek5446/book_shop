/* eslint-disable react-hooks/exhaustive-deps */
import type { FC } from 'react';
import { useState, useEffect } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { StyledContainer } from './App.styles';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import UserProfile from './pages/userProfile/userProfile/UserProfile';
import PrivateProfileRoute from './routes/PrivateAuthRoutes';
import { useAppDispatch } from './store/hooks';
import { auth } from './store/user/userThunk';
import SignIn from './pages/authPage/auth/sigIn/SignIn';
import SignUp from './pages/authPage/auth/signUp/SignUp';
import PrivateAuthRoute from './routes/PrivateUnAuthRoutes';
import BookPage from './pages/Book/bookPage/BookPage';
import Cart from './pages/cartPage/Cart';
import Favorite from './pages/favoritePage/Favorite';
import MainPage from './pages/mainPage/MainPage';

const App: FC = () => {
  const [isLoad, setIsLoad] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          await dispatch(auth());
        }
      } catch (error) {
        const err = error as Error;
        toast(err.message);
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
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={
          (
            <PrivateAuthRoute>
              <SignIn />
            </PrivateAuthRoute>
          )
        }
        />
        <Route path="/signUp" element={
          (
            <PrivateAuthRoute>
              <SignUp />
            </PrivateAuthRoute>
          )
        }
        />
        <Route path="/bookPage/:id" element={<BookPage />} />
        <Route path="/profile"
          element={
            (
              <PrivateProfileRoute>
                <UserProfile />
              </PrivateProfileRoute>
            )
          }
        />
        <Route path="/cart"
          element={
            (
              <PrivateProfileRoute>
                <Cart />
              </PrivateProfileRoute>
            )
          }
        />
        <Route path="/favorite"
          element={
            (
              <PrivateProfileRoute>

                <Favorite />
              </PrivateProfileRoute>
            )
          }
        />
      </Routes>
      <Footer />
    </StyledContainer>
  );
};

export default App;
