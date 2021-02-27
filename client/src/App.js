import React from 'react';
import axios from 'axios';

import { Home } from './components';
import { AuthContextProvider } from './context/AuthContext';

axios.defaults.withCredentials = true;

const App = () => {
  return (
    <AuthContextProvider>
      <Home />
    </AuthContextProvider>
  );
};

export default App;
