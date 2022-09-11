import React, { useEffect, useState } from "react";
import NavbarMain from "../../Layouts/Navbar";
// import { Container, Form, Button } from "react-bootstrap";
import Car from "./Car/Car";

export default function SearchEngine() {
  const [popular, setPopular] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    fetch("http://localhost:4000/cardata")
      .then((data) => data.json())
      .then((cars) => setPopular(cars));
  };

  const searchText = (e) => {
    setFilter(e.target.value);
  };

  let dataSearch = popular.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <div className="SearchEngine">
      <NavbarMain />

      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12 md-5">
            <div className="mb-3 col-4 mx-auto text-center">
              <label className="form-label h4">Search</label>
              <input
                type="text"
                className="form-control"
                value={filter}
                onChange={searchText.bind(this)}
              />
            </div>
          </div>

          {/* =========== MAP =========== */}

          {dataSearch.map((car, index) => {
            return (
              //<Car car={car} key={car.id} />;
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
      </section>
    </div>
  );
}
