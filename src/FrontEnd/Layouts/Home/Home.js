/////////////////////////////////////////
// ============= CARROUSEL =============
////////////////////////////////////////
import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion"; // "framer-motion/dist/framer-motion"

function Home() {
  return (
    <motion.div
      className="crl"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <Carousel slide={true} className="Container">
        <Carousel.Item>
          <img
            src={require("../../images/cars/Chevrolet-Onix-Sedan-2020-2.jpg")}
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
            src={require("../../images/cars/ford-focus-se-white-2017-2.jpg")}
            alt="Jeep Renegade 2019"
            width="100%"
            height="100%"
          />
          <Carousel.Caption>
            <h3>Ford Focus 2017</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img
            src={require("../../images/cars/Jeep-Renegade-2022-2.jpg")}
            alt="Jeep Renegade 2022"
            width="100%"
            height="100%"
          />

          <Carousel.Caption>
            <h3>Jeep Renegade 2022</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="">
          <img
            src={require("../../images/cars/Hyundai-i30-2011-2.jpg")}
            alt="Hyundai i30 Hatchback 2011"
            width="100%"
            height="100%"
          />

          <Carousel.Caption>
            <h3>Jeep Renegade 2022</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </motion.div>
  );
}

export default Home;
