import "./NavbarMain.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faRightToBracket, faGear } from "@fortawesome/free-solid-svg-icons";
import Avatar from "./../../assets/images/avatar.png";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function NavbarMain() {
  return (
    <nav
      id="navbar-main"
      className="navbar-top navbar-dark navbar navbar-expand-md"
    >
      <div className="container-fluid">
        <Link
          className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
          to="/"
          style={{ textDecoration: "none" }}
        >
          Icons
        </Link>
        <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
          <div className="mb-0 form-group">
            <div className="input-group-alternative input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>
              <input
                placeholder="Search"
                type="text"
                className="form-control"
              />
            </div>
          </div>
        </form>
        <Dropdown className="align-items-center d-none d-md-flex navbar-nav dropDownRB" align="end">
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
      </div>
    </nav>
  );
}

export default NavbarMain;
