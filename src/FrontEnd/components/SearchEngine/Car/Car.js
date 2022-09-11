import React from "react";
// import { Container, Card, Button, ListGroup } from "react-bootstrap";
import "./Car.css";

export default function Car({ car }) {
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img
          src={car.image}
          className="imageCard"
          // className="imageCard card-img-top img-fluid"
          alt="car image"
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
}
