import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { AuthProvider } from './Contexts/AuthContext';
import RequireAuthHOC from './HOCs/RequireAuthHOC';
import Login from './components/Login';
import Dashboard from './Pages/Dashboard';
import NoMatch from './Pages/NoMatch';
import Settings from './Pages/Settings';
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
