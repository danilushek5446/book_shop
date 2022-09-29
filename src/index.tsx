import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store/store';
import GlobalStyle from './index.styles';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(

  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </BrowserRouter>,
);
