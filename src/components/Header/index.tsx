import { Link, useLocation } from 'react-router-dom';
import useAuth from 'src/Hooks/useAuth';

function Header() {
  const auth = useAuth();
  const location = useLocation();
  const linkLogin = auth.isAuthenticated ? location.pathname : "/";

  return (
    <div>
      
    </div>
  )
}

export default Header