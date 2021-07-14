import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RootRouter from 'routes/RootRouter';
import StoreProvider from 'store/StoreProvider';
import GlobalStyle from 'styles/GlobalStyle';

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <GlobalStyle />
        <RootRouter />
      </Router>
    </StoreProvider>
  );
};

export default App;
