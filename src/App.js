import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import FullpageWrapper from './pages/FullpageWrapper';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={FullpageWrapper} />
        {/* <Route path="/:language" exact component={FullpageWrapper} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
