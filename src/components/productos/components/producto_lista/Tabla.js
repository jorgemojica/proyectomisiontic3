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
                <td className="centrar"><a className= "link"href="/Nproducto">Editar</a></td>
                <td className="centrar"><a className= "link"href="/Home">Eliminar</a></td> 
            </tr>

            ))}

            </tbody>

    </Table>
    )
};

export default Tabla;