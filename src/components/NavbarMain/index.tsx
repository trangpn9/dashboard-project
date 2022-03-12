import './NavbarMain.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Avatar from "./../../assets/images/avatar.png";
import { Link } from 'react-router-dom';

function NavbarMain() {
  return (
    <nav id="navbar-main" className="navbar-top navbar-dark navbar navbar-expand-md">
    <div className="container-fluid">
        <Link className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" to="/" style={{textDecoration: "none"}}>Icons</Link>
        <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <div className="mb-0 form-group">
                <div className="input-group-alternative input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><FontAwesomeIcon icon={faSearch} /></span>
                    </div>
                    <input placeholder="Search" type="text" className="form-control" />
                </div>
            </div>
        </form>
        <ul className="align-items-center d-none d-md-flex navbar-nav">
            <li className="dropdown nav-item">
                <a aria-haspopup="true" href="#" className="pr-0 nav-link" aria-expanded="false">
                    <div className="align-items-center media">
                        <span className="avatar avatar-sm rounded-circle"><img alt="Avatar" src={Avatar} /></span>
                        <div className="ml-2 d-none d-lg-block media"><span className="mb-0 text-sm font-weight-bold">Jessica Jones</span></div>
                    </div>
                </a>
                <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu-arrow dropdown-menu dropdown-menu-right">
                    <div tabIndex={-1} className="noti-title dropdown-header"><h6 className="text-overflow m-0">Welcome!</h6></div>
                    <a tabIndex={0} role="menuitem" className="dropdown-item" href="#/admin/user-profile"><i className="ni ni-single-02"></i><span>My profile</span></a>
                    <a tabIndex={0} role="menuitem" className="dropdown-item" href="#/admin/user-profile"><i className="ni ni-settings-gear-65"></i><span>Settings</span></a>
                    <a tabIndex={0} role="menuitem" className="dropdown-item" href="#/admin/user-profile"><i className="ni ni-calendar-grid-58"></i><span>Activity</span></a>
                    <a tabIndex={0} role="menuitem" className="dropdown-item" href="#/admin/user-profile"><i className="ni ni-support-16"></i><span>Support</span></a>
                    <div tabIndex={-1} className="dropdown-divider"></div>
                    <a href="#pablo" tabIndex={0} role="menuitem" className="dropdown-item"><i className="ni ni-user-run"></i><span>Logout</span></a>
                </div>
            </li>
        </ul>
    </div>
</nav>

  )
}

export default NavbarMain