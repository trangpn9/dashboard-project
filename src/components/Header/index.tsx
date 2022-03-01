import { Link, useLocation } from 'react-router-dom';
import useAuth from 'src/Hooks/useAuth';

function Header() {
  const auth = useAuth();
  const location = useLocation();
  const linkLogin = auth.isAuthenticated ? location.pathname : "/";

  return (
    <div>
      <ul>
        <li>
          <Link to={linkLogin} >Login</Link>
        </li>
        <li>
          <Link to="/dashboard" >Dashboard</Link>
        </li>
        <li>
          <Link to="/settings" >Settings</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header