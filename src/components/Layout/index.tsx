import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import NavbarMain from "../NavbarMain";

import "./Layout.scss";

function Layout() {
  return (
    <div className="h-100" id="containerLayout">
      <Sidebar />
      <div className="main-content">
        <NavbarMain/>        
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
