import { useState } from "react";
import "./Sidebar.scss";
import LogoDashboard from "./../../assets/images/logo_dashboard.png";

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
        <button className="navbar-toggler" aria-controls="example-collapse-text"
          aria-expanded={toggleNav}>
          <span className="navbar-toggler-icon" onClick={handleToggleNav}></span>
        </button>
        <a className="pt-0 navbar-brand" href="#/admin/index">
          <img
            alt="Logo CMS"
            className="navbar-brand-img"
            src={LogoDashboard}
          />
        </a>
        <div className={toggleNav ? `collapse show navbar-collapse` : `collapse navbar-collapse`}>
          <div className="navbar-collapse-header d-md-none">
            <div className="row">
              <div className="collapse-brand col-6"><a href="#/admin/index">
                <img alt="Logo CMS" src={LogoDashboard} />
              </a>
              </div>
              <div className="collapse-close col-6">
                <button className="navbar-toggler" type="button" onClick={handleCloseNav}><span></span><span></span></button>
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
