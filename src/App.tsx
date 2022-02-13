import React from 'react';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NoMatch from './components/NoMatch';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </Router>
);

export default App;
