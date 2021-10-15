
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';   
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import "./Nproducto.css"
import React, { useState, useEffect } from "react";
import api from "../../../../api";
function Nproducto() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const [newProduct, setNewProduct] = useState({
    nombre: "",
    stock: "",
    pricio: 0,
    url: "",
  });
  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const apiResponse = await api.products.create(newProduct);
      setProductos([...productos, newProduct]);
  };
  return (
      <div>
        <header>
          <Container >
            <Row className="titulo d-flex justify-content-center mt-1 mb-5">
              <Col xs={6}>
                <div className="text-center">
                  <h1 >Nuevo producto</h1>
                </div>
              </Col>
            </Row>  
          </Container>
        </header>
        <Container >
          <Row className="d-flex justify-content-center mt-5">
            <Col md={4} xs={6} className="border border-dark rounded d-flex justify-content-center ">{/* bg-info */}
              <Form>
                <Form.Group as={Row} className="mb-4 mt-4 bold" controlId="formNombre">
                  <Form.Label column sm={2}>
                    Nombre:
                  </Form.Label>
                  <Col md={12}sm={10}>
                    <Form.Control type="text" name="nombre"
                  onChange={handleChange} placeholder="Nombre del producto"/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4 " controlId="formStock">
                  <Form.Label column sm={2}>
                    Stock:
                  </Form.Label>
                  <Col md={12} sm={10}>
                    <Form.Control type="text" name="stock"
                  onChange={handleChange} placeholder="Stock en tienda" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-5" controlId="formPrecio">
                  <Form.Label column sm={2}>
                    Precio:
                  </Form.Label>
                  <Col md={12} sm={10}>
                    <Form.Control type="text" name="precio"
                  onChange={handleChange} placeholder="Precio producto" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-5" controlId="formUrl">
                  <Form.Label column sm={2}>
                    Url:
                  </Form.Label>
                  <Col md={12} sm={10}>
                    <Form.Control type="text" name="url"
                  onChange={handleChange} placeholder="Url Imagen" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-5">
                  <Col md={12} className="d-flex justify-content-around">
                    <Link to="/producto">
                      <Button onClick={handleClick} type="submit">Aceptar</Button>
                    </Link>
                    <Link to="/producto">
                      <Button variant="danger" type="submit">Cancelar</Button>
                    </Link>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>  
        </Container>
      </div>
    
  );
}

export default Nproducto;