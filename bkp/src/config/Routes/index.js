import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Register, MainApp, NotFound } from '../../pages';

const Routers = () => {
  return (
    <Router>
        <Switch>  
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <MainApp />
          </Route>
        </Switch>
    </Router>
  )
}

export default Routers