/////////////////////////////////////////
// ============= CARROUSEL =============
////////////////////////////////////////
import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <div className="gradient-text crl Container mb-5">
      {/* <img
        // className="img-fluid"
        src={require("../../images/logo.jpg")}
        alt="logo"
        width="30%"
        height="30%"
      /> */}
      <Carousel slide={false} className="Container">
        <Carousel.Item>
          <img
            src={require("../../images/cars/Chevrolet-Onix-2015.jpg")}
            alt="First slide"
            width="100%"
            height="100%"
          />
          <Carousel.Caption>
            <h3>Chevrolet Onix 2015</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img
            src={require("../../images/cars/Jeep-Renegade-2019.jpg")}
            alt="Jeep Renegade 2019"
            width="100%"
            height="100%"
          />

          <Carousel.Caption>
            <h3>Jeep Renegade 2019</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img
            src={require("../../images/cars/Jeep-Renegade-2022.jpg")}
            alt="Jeep Renegade 2022"
            width="100%"
            height="100%"
          />

          <Carousel.Caption>
            <h3>Jeep Renegade 2022</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
