// @flow
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './layout/App';
import Default from './components/Default';
import Data from './layout/Data';

const router = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Default}></IndexRoute>
      <Route path="/:id" component={Data}></Route>
    </Route>
  </Router>
);

export default router
