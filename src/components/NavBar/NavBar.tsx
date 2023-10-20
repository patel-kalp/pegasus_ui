import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import capitalOneLogo from '../../static/capitalone.png';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
              src={capitalOneLogo}
              className="d-inline-block align-top"
              alt="Capital One"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="tab-spacing">Home</Nav.Link>
            <Nav.Link href="#gettingstarted" className="tab-spacing">Getting Started</Nav.Link>
            <Nav.Link href="#examples" className="tab-spacing">Examples</Nav.Link>
            <Nav.Link href="#docs" className="tab-spacing">Docs</Nav.Link>
            <Button className="tab-spacing">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;