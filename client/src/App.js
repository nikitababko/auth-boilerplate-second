import React from 'react';
import axios from 'axios';

import { Home } from './components';

axios.defaults.withCredentials = true;

const App = () => {
  return <Home />;
};

export default App;
