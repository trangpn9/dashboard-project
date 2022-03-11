import { useState } from "react";
import "./Sidebar.scss";
import LogoDashboard from "./../../assets/images/logo_dashboard.png";
import Avatar from "./../../assets/images/avatar.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTvAlt, faEarthAsia, faLocation, faUserAlt, faList, faRocket, faPaintBrush, faGifts } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../../HOCs/CustomLink';

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
              <CustomLink to="/dashboard">
                <i className="ni text-primary"><FontAwesomeIcon icon={faTvAlt} /></i>Dashboard
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/settings">
                <i className="ni text-blue"><FontAwesomeIcon icon={faEarthAsia} /></i>Settings
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/">
                <i className="ni text-orange"><FontAwesomeIcon icon={faLocation} /></i>Maps
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/">
                <i className="ni text-yellow"><FontAwesomeIcon icon={faUserAlt} /></i>User Profile
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/tables">
                <i className="ni text-red"><FontAwesomeIcon icon={faList} /></i>Tables
              </CustomLink>
            </li>            
          </ul>
          <hr className="my-3" />
          <h6 className="navbar-heading text-muted">Documentation</h6>
          <ul className="mb-md-3 navbar-nav">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
              >
                <i className="ni"><FontAwesomeIcon icon={faRocket} /></i>Getting started
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
              >
                <i className="ni"><FontAwesomeIcon icon={faPaintBrush} /></i>Foundation
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
              >
                <i className="ni"><FontAwesomeIcon icon={faGifts} /></i>Components
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
