import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { StyledContainer } from './App.styles';
import Authad from './components/Authad/Authad';
import BookContent from './components/BookContent/BookContent';
import Filters from './components/filters/Filters';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <StyledContainer className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" />
      </Routes>
      </BrowserRouter>
     <Header />
     <Filters />
     <BookContent />
     <Authad />
     <Footer />
    </StyledContainer>
  );
}

export default App;
