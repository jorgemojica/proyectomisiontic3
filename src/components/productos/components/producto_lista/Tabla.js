import Table from 'react-bootstrap/Table'
// import productos from '../../producto/ListaProductos.json';
import api from "../../../../api";
import { useEffect } from "react";
import React, { useState } from "react";
const Tabla = ()=>{
    const [productos, setProductos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.products.list();
      setProductos(response);
    };

    fetchData();
  }, []);
    return(
        <Table striped bordered hover variant="secondary">
            <thead >
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Stock</th>
                <th scope="col">Precio</th>
                {/* <th scope="col">Imagen</th> */}
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>
            </tr>
            </thead> 
            <tbody>
            
            {productos.map(item => (
                
            <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.nombre}</td>
                <td>{item.stock}</td>
                <td>${item.precio}</td>
                <td><a className= "link"href="/Nproducto">Editar</a></td>
                <td><a className= "link"href="/Home">Eliminar</a></td> 
            </tr>

            ))}

            </tbody>

    </Table>
    )
};

export default Tabla;