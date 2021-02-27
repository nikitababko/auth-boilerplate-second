import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import AuthContext from 'context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await axios.post('/auth/login', loginData);
      await getLoggedIn();
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Log in to your account</h2>
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

        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
