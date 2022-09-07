import type { FC } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import { StyledContainer } from './App.styles';
import SignIn from './components/auth/sigIn/SignIn';
import SignUp from './components/auth/signUp/SignUp';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';

const App: FC = () => {
  return (
    <StyledContainer className="App">
      <Header />
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      <Footer />
    </StyledContainer>
  );
};

export default App;
