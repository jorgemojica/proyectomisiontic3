import Table from 'react-bootstrap/Table'
// import productos from '../../producto/ListaProductos.json';
import api from "../../../../api";
import { useEffect } from "react";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
const Tabla = ()=>{
    const [productos, setProductos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.products.list();
      setProductos(response);
    };

    fetchData();
  }, []);
  const [title, setTitle] = useState('')
  const getProduct= async (event) =>{
    // const id = event.target.id;
    const response = await api.products.getProduct(title);
    setProductos([response]);
    // const response1 = await api.products.getName(title);
    // setProductos([response1]);
  };
  const deleteProduct =(event) =>{
    const id = event.target.id;
    api.products.getProduct(id);
    const newProducts = productos.filter((product) => product._id !== id);
    setProductos(...[newProducts]);
  };
    return(
      <Col xs={12}>
      <ButtonToolbar
        className="justify-content-between mb-4"
        aria-label="Toolbar with Button groups"
        >
          <Link to="/Nproducto">
              <Button variant="primary">Nuevo producto</Button>
          </Link>
          <InputGroup>
          
          <Form.Control
              onChange={event => setTitle(event.target.value)} 
              type="text"
              placeholder="ID o Nombre"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon2"
          />
          <Button onClick={getProduct} variant="primary">Buscar producto</Button>
          </InputGroup>
          
      </ButtonToolbar>
      <Table striped bordered hover variant="secondary">
            <thead >
            <tr>
                <th className="letra"scope="col">Imagen</th>
                <th className="letra"scope="col">Nombre</th>
                <th className="letra"scope="col">Stock</th>
                <th className="letra"scope="col">Precio</th>
                {/* <th scope="col">Imagen</th> */}
                <th className="letra"scope="col">Editar</th>
                <th className="letra"scope="col">Eliminar</th>
            </tr>
            </thead> 
            <tbody>
            
            {productos.map(item => (
                
            <tr key={item.url}>
                <td><img className="imagen"src={item.url} alt=""/></td>
                <td className="centrar">{item.nombre}</td>
                <td className="centrar">{item.stock}</td>
                <td className="centrar">${item.precio}</td>
                <td className="centrar"><a className= "link"href={`/Nproducto/Edit/${item._id}`}>Editar</a></td>
                <td className="centrar"><a className= "link"onClick={deleteProduct} id={item._id}>Eliminar</a></td> 
            </tr>

            ))}

            </tbody>

    </Table>
  </Col>
    )
};

export default Tabla;