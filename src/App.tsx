import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Login from './views/login/Login';
import HomePage from './views/index/HomePage';

const App: React.FC<{}> = () => (
  React.useMemo(
    () => (
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
    ), [],
  )
);
App.defaultProps = {};

export default App;
