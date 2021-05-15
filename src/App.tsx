import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import Login from './views/login/Login';

function App() {
  // const a:number = 1;
  return (
    <BrowserRouter>
      <Route path="/login">
        <Login />
      </Route>
    </BrowserRouter>
  );
}

export default App;
