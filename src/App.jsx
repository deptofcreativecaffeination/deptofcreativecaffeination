import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import HomePage from './pages/HomePage';
import ThankYouPage from './pages/ThankYouPage';

const App = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={HomePage} />
    <Route path="/thanks" component={ThankYouPage} />
  </Router>
);

export default App;
