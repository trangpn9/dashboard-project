import { Link, useLocation } from "react-router-dom";
import useAuth from "src/Hooks/useAuth";
import './Header.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faChartPie,
  faUsers,
  faPercentage,
  faArrowUp,
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";


function Header() {
  const auth = useAuth();
  const location = useLocation();
  const linkLogin = auth.isAuthenticated ? location.pathname : "/";

  return (
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
      <div className="container-fluid">
        <div className="header-body">
          <div className="row">
            <div className="col-lg-6 col-xl-3">
              <div className="card-stats mb-4 mb-xl-0 card">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="text-uppercase text-muted mb-0 card-title">
                        Traffic
                      </h5>
                      <span className="h2 font-weight-bold mb-0">350,897</span>
                    </div>
                    <div className="col-auto col">
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <FontAwesomeIcon icon={faChartColumn}/>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2 h6">
                      <FontAwesomeIcon icon={faArrowUp}/> 3.48%
                    </span>{" "}
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="card-stats mb-4 mb-xl-0 card">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="text-uppercase text-muted mb-0 card-title">
                        New users
                      </h5>
                      <span className="h2 font-weight-bold mb-0">2,356</span>
                    </div>
                    <div className="col-auto col">
                      <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                        <FontAwesomeIcon icon={faChartPie}/>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-danger mr-2 h6">
                      <FontAwesomeIcon icon={faArrowDown} /> 3.48%
                    </span>{" "}
                    <span className="text-nowrap">Since last week</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="card-stats mb-4 mb-xl-0 card">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="text-uppercase text-muted mb-0 card-title">
                        Sales
                      </h5>
                      <span className="h2 font-weight-bold mb-0">924</span>
                    </div>
                    <div className="col-auto col">
                      <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                        <FontAwesomeIcon icon={faUsers}/>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-warning mr-2 h6">
                      <FontAwesomeIcon icon={faArrowDown} /> 1.10%
                    </span>{" "}
                    <span className="text-nowrap">Since yesterday</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="card-stats mb-4 mb-xl-0 card">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="text-uppercase text-muted mb-0 card-title">
                        Performance
                      </h5>
                      <span className="h2 font-weight-bold mb-0">49,65%</span>
                    </div>
                    <div className="col-auto col">
                      <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                        <FontAwesomeIcon icon={faPercentage}/>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2 h6">
                      <FontAwesomeIcon icon={faArrowUp} /> 12%
                    </span>{" "}
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
