import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavbarMain(navPosition) {
  return (
    <Navbar classNames="Navbar" bg="dark" variant="dark" expand="lg">
      <Container className="Container">
        <Navbar.Brand as={Link} to="/">
          <img
            className="avatar"
            src={require("../../images/logo.jpg")}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/SearchEngine">
              Buscar
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact">
              Contacto
            </Nav.Link>
            <Nav.Link as={Link} to="/Crud">
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
