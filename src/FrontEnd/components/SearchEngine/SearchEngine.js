import React from "react";
import NavbarMain from "../../Layouts/Navbar";
import { Container, Form, Button } from "react-bootstrap";

function SearchEngine() {
  return (
    <div>
      <NavbarMain />
      <Container>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </div>
  );
}

export default SearchEngine;
