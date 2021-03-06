import { useState } from "react";
import "./Sidebar.scss";
import LogoDashboard from "./../../assets/images/logo_dashboard.png";
import Avatar from "./../../assets/images/avatar.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTvAlt,
  faEarthAsia,
  faLocation,
  faUserAlt,
  faList,
  faRocket,
  faPaintBrush,
  faGifts,
  faUmbrellaBeach,
  faUser, faRightToBracket, faGear
} from "@fortawesome/free-solid-svg-icons";
import {Dropdown} from 'react-bootstrap';
import CustomLink from "../../HOCs/CustomLink";

function Sidebar() {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = (e: any) => {
    e.preventDefault();
    setToggleNav(!toggleNav);
  };

  const handleCloseNav = (e: any) => {
    e.preventDefault();
    setToggleNav(false);
  };

  return (
    <nav
      id="sidenav-main"
      className="navbar-vertical fixed-left navbar-light bg-white navbar navbar-expand-md"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler btn"
          aria-controls="example-collapse-text"
          aria-expanded={toggleNav}
        >
          <span
            className="navbar-toggler-icon"
            onClick={handleToggleNav}
          ></span>
        </button>
        <Link className="pt-0 navbar-brand" to="/dashboard">
          <img
            alt="Logo CMS"
            className="navbar-brand-img"
            src={LogoDashboard}
          />
        </Link>

        <Dropdown className="align-items-center d-md-none nav dropDownRB" align="end">
          <Dropdown.Toggle className="dropdown-autoclose-outside">
            <div className="align-items-center media">
              <span className="avatar avatar-sm rounded-circle">
                <img alt="Avatar" src={Avatar} />
              </span>
              <div className="ml-2 d-none d-lg-block media">
                <span className="mb-0 text-sm font-weight-bold">
                  Jackie Trang
                </span>
              </div>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Header>Welcome!</Dropdown.Header>
            <Dropdown.Item eventKey="1">
              <FontAwesomeIcon icon={faUser} className="iconAwesome" />User profile
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
              <FontAwesomeIcon icon={faGear} className="iconAwesome" />Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="3"><FontAwesomeIcon icon={faRightToBracket} className="iconAwesome" />Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div
          className={
            toggleNav
              ? `collapse show navbar-collapse`
              : `collapse navbar-collapse`
          }
        >
          <div className="navbar-collapse-header d-md-none">
            <div className="row">
              <div className="collapse-brand col-6">
                <Link to="/dashboard">
                  <img alt="Logo CMS" src={LogoDashboard} />
                </Link>
              </div>
              <div className="collapse-close col-6">
                <button
                  className="navbar-toggler btn btn-close-nav"
                  type="button"
                  onClick={handleCloseNav}
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item" onClick={handleCloseNav}>
              <CustomLink to="/dashboard">
                <i className="ni text-primary">
                  <FontAwesomeIcon icon={faTvAlt} />
                </i>
                Dashboard
              </CustomLink>
            </li>
            <li className="nav-item" onClick={handleCloseNav}>
              <CustomLink to="/settings">
                <i className="ni text-blue">
                  <FontAwesomeIcon icon={faEarthAsia} />
                </i>
                Settings
              </CustomLink>
            </li>
            <li className="nav-item" onClick={handleCloseNav}>
              <CustomLink to="/">
                <i className="ni text-orange">
                  <FontAwesomeIcon icon={faLocation} />
                </i>
                Google APIs
              </CustomLink>
            </li>
            <li className="nav-item" onClick={handleCloseNav}>
              <CustomLink to="/">
                <i className="ni text-yellow">
                  <FontAwesomeIcon icon={faUserAlt} />
                </i>
                Upload File
              </CustomLink>
            </li>
            <li className="nav-item" onClick={handleCloseNav}>
              <CustomLink to="/tables">
                <i className="ni text-red">
                  <FontAwesomeIcon icon={faList} />
                </i>
                Tables
              </CustomLink>
            </li>
          </ul>
          <hr className="my-3" />
          <h6 className="navbar-heading text-muted">My Blog</h6>
          <ul className="mb-md-3 navbar-nav">
            <li className="nav-item" onClick={handleCloseNav}>
              <a href="#" className="nav-link">
                <i className="ni">
                  <FontAwesomeIcon icon={faRocket} />
                </i>
                Typescript
              </a>
            </li>
            <li className="nav-item" onClick={handleCloseNav}>
              <a href="#" className="nav-link">
                <i className="ni">
                  <FontAwesomeIcon icon={faPaintBrush} />
                </i>
                ReactJS
              </a>
            </li>
            <li className="nav-item" onClick={handleCloseNav}>
              <a href="#" className="nav-link">
                <i className="ni">
                  <FontAwesomeIcon icon={faGifts} />
                </i>
                NextJS
              </a>
            </li>
          </ul>
          <ul className="mb-md-3 navbar-nav">
            <li className="active-pro active nav-item">
              <a
                href="https://trang-it.com"
                className="nav-link text-dark"
              >
                <i className="ni text-dark">
                  <FontAwesomeIcon icon={faUmbrellaBeach} />
                </i>TrangPN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
