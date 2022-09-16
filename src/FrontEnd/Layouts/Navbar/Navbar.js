import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavbarMain(navPosition) {
  return (
    <Navbar
      classNames="Navbar Navbar-css"
      fixed="top"
      bg="dark"
      variant="dark"
      expand="lg"
    >
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
              Pesquisar
            </Nav.Link>

            <Nav.Link as={Link} to="/Contact">
              Contato
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
