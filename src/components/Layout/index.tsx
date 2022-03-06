import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

import "./Layout.scss";

function Layout() {
  return (
    <div className="h-100" id="containerLayout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
