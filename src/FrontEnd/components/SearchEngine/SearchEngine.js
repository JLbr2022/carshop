import React, { useEffect, useState } from "react";
import NavbarMain from "../../Layouts/Navbar";
import { Container, Form, Button } from "react-bootstrap";
import Car from "./Car/Car"

export default function SearchEngine() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    fetch("http://localhost:4000/cardata")
      .then((data) => data.json())
      .then((cars) => setPopular(cars));
  };

  return (
    <div className="SearchEngine">
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

      <div className="popular-cars">
        {popular.map(car => {
          // console.log(cars)
          return <Car key={car.id} car={car}/>;
        })}
      </div>
    </div>
  );
}

