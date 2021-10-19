import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
const ProductForm = ({handleChange, handleClick,formValue}) =>{
    return(
        <Form>
                <Form.Group as={Row} className="mb-4 mt-4 bold" controlId="formNombre">
                  <Form.Label column sm={2}>
                    Numero de factura:
                  </Form.Label>
                  <Col md={12}sm={10}>
                    <Form.Control type="text" name="nombre"
                  onChange={handleChange} placeholder="Numero de venta"
                  value={formValue.nventas}/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-5" controlId="formPlaintextPassword">
                  <Form.Label column sm="2" >
                  Estado
                  </Form.Label>
                  <Col sm="10">
                    <Form.Select aria-label="Seleccione el estado de la venta "  name="estado"
                  onChange={handleChange}
                  value={formValue.ventas}
                  >
                     <option>{formValue.estado}</option>
                      <option value="En proceso">En proceso</option>
                      <option value="Cancelada">Cancelada</option>
                      <option value="Entregada">Entregada</option>
                   
                    </Form.Select>
                  </Col>
              </Form.Group>
                



                <Form.Group as={Row} className="mb-5">
                  <Col md={12} className="d-flex justify-content-around">
                    {/* <Link to="/ventas"> */}
                      <Button onClick={handleClick} type="button">Aceptar</Button>
                    {/* </Link> */}
                    <Link to="/Aventas">
                      <Button variant="danger" type="button">Cancelar</Button>
                    </Link>
                  </Col>
                </Form.Group>
              </Form>
    );
};

export default ProductForm;