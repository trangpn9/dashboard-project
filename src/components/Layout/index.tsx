import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

function Layout() {
  return (
    <>
      <Container fluid className="h-100">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </Container>
    </>
  );
}

export default Layout;
