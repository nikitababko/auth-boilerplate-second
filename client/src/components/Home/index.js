import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Login, Register, Customers } from '../';
import AuthContext from 'context/AuthContext';
import Navbar from '../Layout/Navbar';

const Home = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Router>
      <Navbar />
      <Switch>
        {loggedIn === false && (
          <>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </>
        )}
        {loggedIn === true && <Route path="/customers" component={Customers} />}
      </Switch>
    </Router>
  );
};

export default Home;
