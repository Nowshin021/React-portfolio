import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navarea() {
  return (
    <Navbar bg="info" variant="light" expand="lg">
    <Container>
      <Navbar.Brand className="nav-item active text-lg" href="/">React-Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto text-white">
          <Nav.Link className="nav-item" href="/">Home</Nav.Link>
          <Nav.Link className="nav-item" href="/projects">Projects</Nav.Link>
          <Nav.Link className="nav-item" href="#about">Skills</Nav.Link>
          <Nav.Link className="nav-item" href="#login">Publications</Nav.Link>
          <Nav.Link className="nav-item" href="#login">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navarea