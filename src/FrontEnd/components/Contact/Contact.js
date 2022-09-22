import React, {useState} from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { Button, Col, Form, Row, Label, InputGroup} from 'react-bootstrap';

function Contact() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }

            setValidated(true);
        };

  return (
    <motion.div
      className="Contact"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { durtion: 0.3 } }}
    >
      <Form className="Form" noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nome"
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Sobrenome"
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Usuário</Form.Label>
            <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Nome de usuário"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, escolha um nome de usuário
                    </Form.Control.Feedback>
                  </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Cidade</Form.Label>
            <Form.Control type="text" placeholder="Cidade" required />
            <Form.Control.Feedback type="invalid">
                Forneça uma cidade válida
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>UF</Form.Label>
            <Form.Control type="text" placeholder="UF" required />
            <Form.Control.Feedback type="invalid">
                Forneça uma UF válido
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>CEP</Form.Label>
            <Form.Control type="text" placeholder="CEP" required />
            <Form.Control.Feedback type="invalid">
                Forneça um CEP válido
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Concorde com os termos e condições"
            feedback="Você deve concordar antes de enviar"
            feedbackType="invalid"
          />
        </Form.Group>
        <Button variant="success" type="submit">Enviar</Button>             
      </Form>
    </motion.div>
  )   
}

export default Contact;
