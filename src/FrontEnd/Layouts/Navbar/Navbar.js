import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { motion } from "framer-motion";

export default function NavbarMain() {
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

            <Nav.Link as={Link} to="/Crud">
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </motion.div>
  );
}
