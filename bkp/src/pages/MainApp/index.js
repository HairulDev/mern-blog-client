import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from '../NotFound';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
import { Header } from '../../components';


const MainApp = () => {
  return (
    <div>
    <Router>
      <Switch>
        <Route path="/create-blog/:id?">
          <CreateBlog />
        </Route>
        <Route path="/detail-blog/:id">
          <DetailBlog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  <Header />
    </div>
  )
}

export default MainApp
