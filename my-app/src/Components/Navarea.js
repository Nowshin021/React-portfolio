import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-scroll'
function Navarea() {
  return (
    <div>
      <Navbar  variant="dark" style={{backgroundColor:"#1e5566"}}expand="lg">
      <Container>
        <Navbar.Brand className="nav-item active text-lg" href="/">React-Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white">
          <Link className="nav-item" to='achievements' smooth={true}>Achievements</Link>
            <Link className="nav-item" to='projects' smooth={true}>Projects</Link>
            <Link className="nav-item" to='skills' smooth={true}>Skills</Link>
            <Link className="nav-item" to='publications' smooth={true}>Publications</Link>
            <Link className="nav-item" to='contact' smooth={true}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navarea