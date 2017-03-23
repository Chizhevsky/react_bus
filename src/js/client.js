import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Main from './components/Main';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main} />
  </Router>,
  app
);
