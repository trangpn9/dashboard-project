import { useState } from "react";
import "./Sidebar.scss";
import LogoDashboard from "./../../assets/images/logo_dashboard.png";
import Avatar from "./../../assets/images/avatar.png"
import { Link } from "react-router-dom";

function Sidebar() {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = (e: any) => {
    e.preventDefault();
    setToggleNav(!toggleNav);
  }

  const handleCloseNav = (e:any) => {
    e.preventDefault();
    setToggleNav(false);
  }

  return (
    <nav
      id="sidenav-main"
      className="navbar-vertical fixed-left navbar-light bg-white navbar navbar-expand-md"
    >
      <div className="container-fluid">
        <button className="navbar-toggler btn" aria-controls="example-collapse-text"
          aria-expanded={toggleNav}>
          <span className="navbar-toggler-icon" onClick={handleToggleNav}></span>
        </button>
        <Link className="pt-0 navbar-brand" to="/dashboard">
          <img
            alt="Logo CMS"
            className="navbar-brand-img"
            src={LogoDashboard}
          />
        </Link>

        <ul className="align-items-center d-md-none nav">
          <li className="dropdown nav-item"><a aria-haspopup="true" href="#" className="nav-link-icon nav-link"
              aria-expanded="false"><i className="ni ni-bell-55"></i></a>
            <div tabIndex={-1} role="menu" aria-labelledby="navbar-default_dropdown_1" aria-hidden="true"
              className="dropdown-menu-arrow dropdown-menu dropdown-menu-right"><button type="button" tabIndex={0}
                role="menuitem" className="dropdown-item">Action</button><button type="button" tabIndex={0} role="menuitem"
                className="dropdown-item">Another action</button>
              <div tabIndex={-1} className="dropdown-divider"></div><button type="button" tabIndex={0} role="menuitem"
                className="dropdown-item">Something else here</button>
            </div>
          </li>
          <li className="dropdown nav-item"><a aria-haspopup="true" href="#" className="nav-link" aria-expanded="false">
              <div className="align-items-center media"><span className="avatar avatar-sm rounded-circle"><img alt="Jackie Trang"
                    src={Avatar} /></span></div>
            </a>
            <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu-arrow dropdown-menu dropdown-menu-right">
              <div tabIndex={-1} className="noti-title dropdown-header">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </div><a tabIndex={0} role="menuitem" className="dropdown-item" href="#/admin/user-profile"><i
                  className="ni ni-single-02"></i><span>My profile</span></a><a tabIndex={0} role="menuitem"
                className="dropdown-item" href="#/admin/user-profile"><i
                  className="ni ni-settings-gear-65"></i><span>Settings</span></a><a tabIndex={0} role="menuitem"
                className="dropdown-item" href="#/admin/user-profile"><i
                  className="ni ni-calendar-grid-58"></i><span>Activity</span></a><a tabIndex={0} role="menuitem"
                className="dropdown-item" href="#/admin/user-profile"><i
                  className="ni ni-support-16"></i><span>Support</span></a>
              <div tabIndex={-1} className="dropdown-divider"></div><a href="#pablo" tabIndex={0} role="menuitem"
                className="dropdown-item"><i className="ni ni-user-run"></i><span>Logout</span></a>
            </div>
          </li>
        </ul>

        <div className={toggleNav ? `collapse show navbar-collapse` : `collapse navbar-collapse`}>
          <div className="navbar-collapse-header d-md-none">
            <div className="row">
              <div className="collapse-brand col-6"><Link to="/dashboard">
                <img alt="Logo CMS" src={LogoDashboard} />
              </Link>
              </div>
              <div className="collapse-close col-6">
                <button className="navbar-toggler btn btn-close-nav" type="button" onClick={handleCloseNav}><span></span><span></span></button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a aria-current="page" className="nav-link active" href="#/admin/index">
                <i className="ni ni-tv-2 text-primary"></i>Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/admin/icons">
                <i className="ni ni-planet text-blue"></i>Icons
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/admin/maps">
                <i className="ni ni-pin-3 text-orange"></i>Maps
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/admin/user-profile">
                <i className="ni ni-single-02 text-yellow"></i>User Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/admin/tables">
                <i className="ni ni-bullet-list-67 text-red"></i>Tables
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/auth/login">
                <i className="ni ni-key-25 text-info"></i>Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/auth/register">
                <i className="ni ni-circle-08 text-pink"></i>Register
              </a>
            </li>
          </ul>
          <hr className="my-3" />
          <h6 className="navbar-heading text-muted">Documentation</h6>
          <ul className="mb-md-3 navbar-nav">
            <li className="nav-item">
              <a
                href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/overview?ref=adr-admin-sidebar"
                className="nav-link"
              >
                <i className="ni ni-spaceship"></i>Getting started
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/colors?ref=adr-admin-sidebar"
                className="nav-link"
              >
                <i className="ni ni-palette"></i>Foundation
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/alerts?ref=adr-admin-sidebar"
                className="nav-link"
              >
                <i className="ni ni-ui-04"></i>Components
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
