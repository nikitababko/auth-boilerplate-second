import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { LogOutBtn } from 'components';
import AuthContext from 'context/AuthContext';

const Navbar = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div>
      <Link to="/home">Home</Link>
      {loggedIn === false && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}

      {loggedIn === true && (
        <>
          <Link to="/customers">Customers</Link>
          <LogOutBtn />
        </>
      )}
    </div>
  );
};

export default Navbar;
