
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';   
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
//import Calendario from '../venta_nueva/Calendario'; 
import { Link } from 'react-router-dom';
function Nproducto() {
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
          <Col md={5} xs={6} className="border border-dark rounded d-flex justify-content-center ">{/* bg-info */}
            <Form  border="primary"  style={{ width: '25rem' }} >
              <Form.Group as={Row} className="mb-3 mt-4" controlId="formPlaintextEmail" >
                <Form.Label column sm="2">
                  N.Venta
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Identificador de la venta," />
                </Col>
              </Form.Group>    
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2" >
                ID
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Identificador" />
                  
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Cantidad
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Cantidad de productos" />
                  
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2" >
                Precio
                </Form.Label>
                <Col sm="10">
                  <Form.Control  type="text" placeholder="Valor del precion unitario" />
                  
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  V.Venta
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="valor total de la venta" />
                  
                </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2" >
                  Fecha
                  </Form.Label>
                  <Col sm="10">
                  
                  <Form.Control type="text" placeholder="Fecha de la venta" />
                  
                  </Col>
                </Form.Group>
              
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2" >
                  Cliente
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" placeholder="Nombre del cliente" />
                    
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2" >
                  Cedula
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" placeholder="Identifacion del cliente" />
                    
                  </Col>
                </Form.Group>
              
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2" >
                  Vendedor
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" placeholder="Nombre del vendedor" />
                  </Col>
                </Form.Group>
              
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label column sm="2" >
                  Estado
                  </Form.Label>
                  <Col sm="10">
                    <Form.Select aria-label="Seleccione el estado de la venta ">
                      <option>Seleccione el estado de la venta</option>
                      <option value="1">En proceso</option>
                      <option value="2">Cancelada</option>
                      <option value="3">Entregada</option>
                    </Form.Select>
                  </Col>
              </Form.Group>
              <Col md={12} className="d-flex justify-content-around">
                <Link to="/Aventas">
                  <Button className="mb-3"variant="primary">Ingresar</Button>
                </Link>
                
              </Col>
            </Form>
          </Col>
        </Row>  
      </Container>
    </div>
    
  );
}

export default Nproducto;