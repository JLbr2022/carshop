import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import NavbarMain from "../../Layouts/Navbar/Navbar";

export default function Footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4"></section>

        <section className="mb-4">
          <p></p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase"> CANAIS DE CONTATOS </h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white"></a>
                </li>
                <a
                  href="https://instagram.com/dilukiladiego"
                  className="text-white"
                  target="_blank"
                >
                  <img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the badge&logo=instagram&logoColor=white" />
                </a>

                <li>
                  <a
                    href="https://www.linkedin.com/in/antónio-kalenda-dilukila-1b7a84165"
                    className="text-white"
                    target="_blank"
                  >
                    <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://whatsapp.com/dl/"
                    className="text-white"
                    target="_blank"
                  >
                    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
                  </a>
                </li>

                <li>
                  <a href="#!" className="text-white"></a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase"></h5>

              <h6 className="text-uppercase">ENDEREÇO</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  Rua João Negrão -849/850 CENTRO, CURITIBA-PR CEP: 80010200
                  Telefone (41) 991188678
                </li>
                <li></li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase"></h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    href="http://localhost:3000/SearchEngine"
                    className="text-white"
                    //target=""
                  >
                    PESQUISA
                  </a>
                </li>
                
                <li></li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase"></h5>

              <ul className="list-unstyled mb-0">
                <a
                  href="http://localhost:3000/static/media/logo.ab3f88e98264385db3ab.jpg"
                  className="text-white"
                  target="_blank"
                >
                  <a
                    href="http://localhost:3000/"
                    className="text-white"
                    //target=""
                  >
                    VOLTAR PARA PÁGINA INICIAL
                  </a>
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        CarShop©2022-Muita precaução ao volante
        <a className="text-white" href="https://mdbootstrap.com/"></a>
      </div>
    </MDBFooter>
  );
}
