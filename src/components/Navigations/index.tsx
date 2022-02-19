import LogoDashboard from './../../assets/images/logo_dashboard.png';

function Navigations() {
  return (
    <nav id="sidenav-main" className="navbar-vertical fixed-left navbar-light bg-white navbar navbar-expand-md">
      <div className="container-fluid"><button className="navbar-toggler" type="button"><span
        className="navbar-toggler-icon"></span></button><a className="pt-0 navbar-brand" href="#/admin/index"><img
          alt="Logo CMS" className="navbar-brand-img" src={LogoDashboard} /></a>
      </div>
    </nav>
  )
}

export default Navigations;