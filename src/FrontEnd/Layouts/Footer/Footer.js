import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          {/* eslint-disable-next-line */}
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                G5 Car Shop
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Lenguajes</h6>
              <p>
                <a href="#!" className="text-reset">
                  HTML / CSS / Boostrap
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Node.JS / Espress
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  MongoDB
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Enlaces de Interés
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Precios
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Configuración
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Ordenes
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Ayuda
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Rúa Toti 2022, #16, Sao Paulo, SP, Brasil
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                g5carchop@g5cs.com.br
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +55 11 99999-9999
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +55 12 88888-8888
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright :
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Toti - Grupo 5, 2022
        </a>
      </div>
    </MDBFooter>
  );
}
