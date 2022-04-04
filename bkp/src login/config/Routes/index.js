import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Register } from '../../pages';

const Routers = () => {
  return (
    <Router>
        <Switch>  
          <Route path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
    </Router>
  )
}

export default Routers