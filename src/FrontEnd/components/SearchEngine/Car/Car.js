import React from "react";
import "./Car.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCar from "../../ShoppingCar/ShoppingCar";

export default function Car({ car, index }) {
  // =========== FUNCTION TO FORMAT PRICE NUMBER ===========
  function formatNumber(number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number);
  }

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index}>
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={car.image} className="imageCard" alt="Imagen do Veículo" />
        <div className="card-body">
          <h5 className="card-title text-center">{car.model}</h5>
          <p className="card-text">Marca: {car.brand}</p>
          <p className="card-text">Ano: {car.year}</p>
          <p className="card-text">Preço: {formatNumber(car.price)}</p>
          <div className="mb-2">
            <button className="buyButton" onClick={() => <ShoppingCar />}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
