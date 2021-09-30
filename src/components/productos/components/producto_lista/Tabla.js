import Table from 'react-bootstrap/Table'
import productos from '../../producto/ListaProductos.json';

const Tabla = ()=>{
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
                
            <tr key={item.id}>
                <td>{item.id}</td>
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