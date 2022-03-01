import { Link } from 'react-router-dom';
import useAuth from 'src/Hooks/useAuth';

function Header() {
  const auth = useAuth();
  const linkLogin = auth.isAuthenticated ? location.pathname : "/";

  return (
    <div>
      {console.log('LinkLogin: ', location)}
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