import React, { useEffect, useState } from "react";
import Car from "./Car/Car";

export default function SearchEngine() {
  const [stock, setStock] = useState([]);
  const [filter, setFilter] = useState("");
  const URL = "http://localhost:4000/cardata";

  const fetchStock = async () => {
    fetch(URL)
      .then((data) => data.json())
      .then((cars) => setStock(cars));
  };

  useEffect(() => {
    fetchStock();
  }, []);

  // =========== DATA FILTER ===========
  const searchText = (e) => {
    setFilter(e.target.value);
  };

  let dataSearch = stock.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <div className="SearchEngine">
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12 md-5">
            <div className="mb-3 col-4 mx-auto text-center">
              <label className="form-label h4">Pesquisar</label>
              <input
                placeholder="digite marca, modelo, ano, preço..."
                type="text"
                className="form-control"
                value={filter}
                onChange={searchText.bind(this)}
              />
            </div>
          </div>

          {/* =========== MAP =========== */}

          {dataSearch.map((car, index) => {
            return <Car car={car} key={index} />;
          })}
        </div>
      </section>
    </div>
  );
}
