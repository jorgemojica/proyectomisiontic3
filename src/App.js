import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from './components/login/login'
import Home from './components/1home/home'
// import NotFound from './components/1home/components/NotFound';
import ListaProductos from './components/productos/components/producto_lista/Productos';
import Header from './components/productos/components/producto_lista/Header';
import Nproducto from './components/productos/components/producto_nuevo/Nproducto';
import EditarProducto from './components/productos/components/producto_nuevo/editarProducto';
import NavBar from './components/1home/components/NavBar';
import GestionarUsuarios from './components/usuarios/GestionarUsuarios';
import EditarUsuario from './components/usuarios/EditarUsuario';
import Ventas from './components/ventas/components/administrador_Venta/Aventas'
import NVentas from './components/ventas/components/venta_nueva/Nventa'
import HeaderVenta from './components/ventas/components/administrador_Venta/Header'
import EditarVetans from './components/ventas/components/venta_nueva/editarVenta'

import PrivateRoute from './components/login/PrivateRoute';
import Logout from'./components/1home/components/logout';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <PrivateRoute path="/home" exact>
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/producto" exact>
          <NavBar pagina={"/producto"}/>
          <Logout/>
          <Header />
          <ListaProductos/>
        </PrivateRoute>
        <PrivateRoute path="/Nproducto" exact>
          <NavBar  pagina={"/Nproducto"}/>
          <Logout/>
          <Nproducto />
        </PrivateRoute>
        <PrivateRoute path="/Nproducto/Edit/:productId" exact>
          <NavBar  pagina={"/Nproducto"}/>
          <Logout/>
          <EditarProducto />
        </Route>

        <Route path="/Nventa/Edit/:ventasId" exact>
          <NavBar  pagina={"/editarVentas"}/>
          <EditarVetans />
        </Route>
        <Route path="/usuarios" exact>
        </PrivateRoute>
        <PrivateRoute path="/usuarios" exact>
          <NavBar  pagina={"/usuarios"}/>
          <Logout/>
          <GestionarUsuarios />
        </PrivateRoute>
        <PrivateRoute path="/editarUsuario" exact>
          <NavBar  pagina={"/editarUsuario"}/>
          <Logout/>
          <EditarUsuario />
        </PrivateRoute>
        <PrivateRoute path="/Aventas" exact>
          <NavBar pagina={"/Aventas"} />
          <Logout/>
          <HeaderVenta/>
          <Ventas/>
        </PrivateRoute>
        <PrivateRoute path="/Nventa" exact>
          <NavBar pagina={"/Nventa"}/>
          <Logout/>
          <NVentas/>
        </PrivateRoute>
        {/* <Redirect component={NotFound}></Redirect> */}
      </Switch>
    </Router>
  );
}

export default App;
