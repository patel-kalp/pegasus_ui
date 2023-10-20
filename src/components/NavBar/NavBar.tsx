import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import capitalOneLogo from '../../static/capitalone.png';
import './NavBar.css';

const NavBar = () => {
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
            <Nav.Link as={Link} to="/" className="tab-spacing">Home</Nav.Link>
            <Nav.Link as={Link} to="/GettingStarted" className="tab-spacing">Getting Started</Nav.Link>
            <Nav.Link as={Link} to="/Examples" className="tab-spacing">Examples</Nav.Link>
            <Nav.Link as={Link} to="/Docs" className="tab-spacing">Docs</Nav.Link>
            <Button className="tab-spacing">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;