import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Main from './pages/Main';
import ProductPage from './pages/ProductPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Main} />
        <Route path="/products/:productName" exact component={ProductPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
