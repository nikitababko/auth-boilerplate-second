import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import AuthContext from 'context/AuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };

      await axios.post('/auth', registerData);
      await getLoggedIn();
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Register a new account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="password"
          placeholder="Verify your password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
