import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import usuarios from './EjemploListaUsuarios/EjemploListaUsuarios.json';

const GestionarUsuarios = () => {
    return (
        <Container>
            <Row>
                <div className="text-center pt-5">
                    <h1>Usuarios</h1>
                </div>
                <Table className="mt-5" striped bordered hover>
                    <thead className="text-center">
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Clave</th>
                            <th>Usuario</th>
                            <th>Rol</th>
                            <th>Estado</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody className="text-center justify-content-center align-items-center">
                        {usuarios.map(usuario => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.clave}</td>
                                <td>{usuario.usuario}</td>
                                <td>{usuario.rol}</td>
                                <td>{usuario.estado}</td>
                                <td>
                                    <Link className="p-0" to="/editarUsuario">
                                        <Button variant="warning">Editar</Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container >
    );
}

export default GestionarUsuarios;