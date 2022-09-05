import Authad from './components/Authad/Authad';
import BookContent from './components/BookContent/BookContent';
import Filters from './components/filters/Filters';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
     <Header />
     <Filters />
     <BookContent />
     <Authad />
    </div>
  );
}

export default App;
