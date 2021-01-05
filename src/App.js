import React from 'react';
import './App.css';
import { Router, Switch, Route } from "react-router-dom";
import Landing from './components/Landing';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact component={Landing} path="/" />
      </Switch>
    </Router>
  );
}

export default App;
