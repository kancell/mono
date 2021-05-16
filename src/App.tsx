import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Login from './views/login/Login';
import HomePage from './views/index/HomePage';

function App() {
  // const a:number = 1;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
