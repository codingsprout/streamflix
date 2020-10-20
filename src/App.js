import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Browse, Login, Register } from './pages';
import * as ROUTES from './constant/routes';

function App() {
  return (
    <Router>
      <Route exact path='/browse'>
        <Browse />
      </Route>
      <Route exact path='/register'>
        <Register />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}

export default App;
