import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import Navigations from '../Navigations';

function Layout() {
  return (
    <>
      <Navigations />
      <Container fluid className="h-100">
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </>
  )
}

export default Layout