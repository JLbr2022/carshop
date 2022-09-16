/////////////////////////////////////////
// ============= CARROUSEL =============
////////////////////////////////////////
import React from "react";
// import React, { useEffect, useState } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function Home(car) {
  console.log(car);
  return (
    <div className="crl Container mb-5">
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
            // className="d-block h-100 w-100"
            src={require("../../images/cars/Chevrolet-Onix-2015.jpg")}
            alt="First slide"
            width="800rem"
            height="600rem"
          />
          <Carousel.Caption>
            <h3>Chevrolet Onix 2015</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img
            // className="d-block h-100 w-100"
            src={require("../../images/cars/Jeep-Renegade-2019.jpg")}
            alt="Jeep Renegade 2019"
            width="800em"
            height="600em"
          />

          <Carousel.Caption>
            <h3>Jeep Renegade 2019</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img
            // className="d-block h-100 w-100"
            src={require("../../images/cars/Jeep-Renegade-2022.jpg")}
            alt="Jeep Renegade 2022"
            width="800em"
            height="600em"
          />

          <Carousel.Caption>
            <h3>Jeep Renegade 2022</h3>
            {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
