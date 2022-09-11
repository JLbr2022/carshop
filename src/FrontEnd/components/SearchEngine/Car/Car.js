import React from "react";
// import { Container, Card, Button, ListGroup } from "react-bootstrap";
import "./Car.css";

export default function Car({ car, index }) {
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={car.image} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{car.model}</h5>
          <p className="card-text">Marca: {car.brand}</p>
          <p className="card-text">Año: {car.year}</p>
          <p className="card-text">Precio: {car.price}</p>
        </div>
      </div>
    </div>

    // <Container>
    //   <div>
    //     <Card style={{ width: "18rem" }} key={index}>
    //       <Card.Img variant="top" src="holder.js/100px180" />
    //       <Card.Body>
    //         <Card.Title>{car.model}</Card.Title>
    //         <ListGroup.Item>Marca: {car.brand}</ListGroup.Item>
    //         <ListGroup.Item>Año: {car.year}</ListGroup.Item>
    //         <ListGroup.Item>Precio: {car.price}</ListGroup.Item>

    //         <Button className="mt-3" variant="primary">
    //           Comprar
    //         </Button>
    //       </Card.Body>
    //     </Card>
    //   </div>
    // </Container>
  );
}
