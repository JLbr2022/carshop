import React, { useEffect, useState } from "react";
import NavbarMain from "../../Layouts/Navbar";
import { Container, Form, Button } from "react-bootstrap";
import Car from "./Car/Car";

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

      <section>
        <div className="py-4 container">
          <div className="row justify-content-center">
            {popular.map((car) => {
              return (
                <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                  <div className="card p-0 overflow-hidden h-100 shadow">
                    <img
                      src={car.image}
                      className="card-img-top img-fluid"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">{car.model}</h5>
                      <p className="card-text">Marca: {car.brand}</p>
                      <p className="card-text">Año: {car.year}</p>
                      <p className="card-text">Precio: {car.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <Car key={car.id} car={car} />; */}
      {/* <div className="popular-cars">
        })}
        </div>
      </div> */}
    </div>
  );
}
