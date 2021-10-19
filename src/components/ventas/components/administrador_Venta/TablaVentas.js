import Table from 'react-bootstrap/Table'
import api from "../../../../api";
import { useEffect } from "react";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
const TablaVentas = ()=>{
    const [ventas, setVentas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.ventas.list();
      setVentas(response);
    };
    

    fetchData();
  }, []);

  const deleteVentas =(event) =>{
    const id = event.target.id;
    api.ventas.delete(id);
    const newVentas = ventas.filter((ventas) => ventas._id !== id);
    setVentas(...[newVentas]);
  };
    return(
        <Table striped bordered hover variant="secondary">
            <thead >
            <tr>
                <th className="letra"scope="col">Codigo Venta</th>
                
                <th className="letra"scope="col">Cantidad</th>
                <th className="letra"scope="col">Precio Producto</th>
                <th className="letra"scope="col">Valor Venta</th>
                <th className="letra"scope="col">Fecha</th>
                <th className="letra"scope="col">Cliente</th>
                <th className="letra"scope="col">Cedula</th>
                <th className="letra"scope="col">Vendedor</th>
                <th className="letra"scope="col">Estado</th>
                {/* <th scope="col">Imagen</th> */}
                <th className="letra"scope="col">Editar</th>
                <th className="letra"scope="col">Eliminar</th>
            </tr>
            </thead> 
            <tbody>
            
            {ventas.map(item => (
                
            <tr key={item.url}>
                <td className="centrar">{item.nventas}</td>
                <td className="centrar">${item.cantidad}</td>
                <td className="centrar">{item.price}</td>
                <td className="centrar">{item.vventas}</td>
                <td className="centrar">{item.fecha}</td>
                <td className="centrar">{item.cliente}</td>
                <td className="centrar">{item.cedula}</td>
                <td className="centrar">{item.vendedor}</td>
                <td className="centrar">{item.estado}</td>
                <td className="centrar"><a className= "link"href={`/Nventa/Edit/${item._id}`} >Editar</a></td>
                <td className="centrar"><a className= "link"onClick={deleteVentas} id={item._id}>Eliminar</a></td> 
            </tr>

            ))}

            </tbody>

    </Table>
    )
};


export default  TablaVentas;