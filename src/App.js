import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import Landing from './components/Landing';
import { createBrowserHistory } from 'history';
import Dashboard from './components/Dashboard';
import AddBook from './components/AddBook';
import NotFoundPage from './components/NotFoundPage';

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact component={Landing} path="/" />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={AddBook} path="/add" />
        <Route component={NotFoundPage} path="" />
      </Switch>
    </Router>
  );
}

export default App;
