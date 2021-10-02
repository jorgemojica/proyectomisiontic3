import Table from 'react-bootstrap/Table'
//import productos from '../../producto/ListaProductos.json';

import misventas from '../misventas/ListaVentas.json';

const TablaVentas = ()=>{
    return(
        <Table striped bordered hover variant="secondary">
            <thead >
            <tr>
                <th scope="col">N.Venta</th>
                <th scope="col">ID</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                {/* <th scope="col">Imagen</th> */}
                <th scope="col">Edita</th>
                <th scope="col">Eliminar</th>
            </tr>
            </thead> 
            <tbody>
            
            {misventas.map(item => (
                
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.stock}</td>
                <td>${item.precio}</td>
                <td><a className= "link"href="/Nventa">Editar</a></td>
                <td><a className= "link"href="/Home">Eliminar</a></td> 
            </tr>

            ))}

            </tbody>

    </Table>
    )
};

export default  TablaVentas;