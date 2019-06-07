import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import FullpageWrapper from './pages/FullpageWrapper';
import ProductPage from './pages/ProductPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={FullpageWrapper} />
        <Route path="/products/:productName" exact component={ProductPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
