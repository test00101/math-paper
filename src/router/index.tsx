import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Paper from '../pages/Paper';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/paper">
        <Paper />
      </Route>

      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
};

export default Router;
