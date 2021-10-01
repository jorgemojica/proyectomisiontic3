import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const EditarUsuario = () => {
    const roles = [
        { id: 1, nombre: "Administrador" },
        { id: 2, nombre: "Vendedor" }
    ];
    const estados = [
        { id: 1, nombre: "Pendiente" },
        { id: 2, nombre: "Autorizado" },
        { id: 3, nombre: "No Autorizado" }
    ];
    return (
        <Container className="mt-5">
            <div className="text-center mb-5">
                <h1>Editar Usuario</h1>
            </div>
            <Form className="d-flex justify-content-center align-items-center">
                <Container className="col-4">
                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control type="text" readOnly />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Clave:</Form.Label>
                            <Form.Control type="text" readOnly />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Usuario:</Form.Label>
                            <Form.Control type="text" readOnly />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Rol:</Form.Label>
                            <Form.Select>
                                <option>Seleccione un rol...</option>
                                {roles.map(rol => (
                                    <option value={rol.id}>{rol.nombre}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Estado:</Form.Label>
                            <Form.Select>
                                <option>Seleccione un estado...</option>
                                {estados.map(estado => (
                                    <option value={estado.id}>{estado.nombre}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <div className="text-center">
                            <Link to="/usuarios">
                                <Button variant="primary">Guadar</Button>
                            </Link>
                            &nbsp;
                            <Link to="/usuarios">
                                <Button variant="danger">Cancelar</Button>
                            </Link>
                        </div>
                    </Row>
                </Container>
            </Form>
        </Container>
    );
}

export default EditarUsuario;