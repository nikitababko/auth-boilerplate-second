import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Login, Register, Customers } from '../';
import Navbar from '../Layout/Navbar';

const Home = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/customers" component={Customers} />
      </Switch>
    </Router>
  );
};

export default Home;
