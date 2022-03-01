import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { AuthProvider } from './Contexts/AuthContext';
import RequireAuthHOC from './HOCs/RequireAuthHOC';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NoMatch from './components/NoMatch';
import Settings from './components/Settings';
import Layout from './components/Layout';

const App = () => {
  return (

  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<RequireAuthHOC><Layout/></RequireAuthHOC>}>
          <Route path="/dashboard" element={<RequireAuthHOC><Dashboard /></RequireAuthHOC>} />
          <Route path="/settings" element={<RequireAuthHOC><Settings /></RequireAuthHOC>} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  </AuthProvider>
);}

export default App;
