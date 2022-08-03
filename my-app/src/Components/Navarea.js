import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navarea() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand className="nav-item active" href="#home">Blogify</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto text-white">
          <Nav.Link className="nav-item" href="#home">Home</Nav.Link>
          <Nav.Link className="nav-item" href="#blogs">Blogs</Nav.Link>
          <Nav.Link className="nav-item" href="#about">About</Nav.Link>
          <Nav.Link className="nav-item" href="#login">Signup/LogIn</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navarea