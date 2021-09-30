
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';   
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
function Nproducto() {
  return (
      <div>
        <header>
          <Container >
            <Row className="titulo d-flex justify-content-center mt-5 mb-5">
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
            <Col md={5} xs={6} className="border border-dark rounded d-flex justify-content-center ">{/* bg-info */}
              <Form>
                <Form.Group as={Row} className="mb-4 mt-4 bold" controlId="formNombre">
                  <Form.Label column sm={2}>
                    Nombre:
                  </Form.Label>
                  <Col md={12}sm={10}>
                    <Form.Control type="text" placeholder="Nombre del producto"/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4 " controlId="formStock">
                  <Form.Label column sm={2}>
                    Stock:
                  </Form.Label>
                  <Col md={12} sm={10}>
                    <Form.Control type="text" placeholder="Stock en tienda" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-5" controlId="formPrecio">
                  <Form.Label column sm={2}>
                    Precio:
                  </Form.Label>
                  <Col md={12} sm={10}>
                    <Form.Control type="text" placeholder="Precio producto" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-5">
                  <Col md={12} className="d-flex justify-content-around">
                    <Link to="/producto">
                      <Button type="submit">Aceptar</Button>
                    </Link>
                    <Link to="/producto">
                      <Button type="submit">Cancelar</Button>
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