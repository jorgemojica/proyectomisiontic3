import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from './components/login/login'
import Home from './components/1home/home'
import NotFound from './components/1home/components/NotFound';
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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/producto" exact>
          <NavBar pagina={"/producto"}/>
          <Header />
          <ListaProductos/>
        </Route>
        <Route path="/Nproducto" exact>
          <NavBar  pagina={"/Nproducto"}/>
          <Nproducto />
        </Route>
        <Route path="/Nproducto/Edit/:productId" exact>
          <NavBar  pagina={"/Nproducto"}/>
          <EditarProducto />
        </Route>
        <Route path="/usuarios" exact>
          <NavBar  pagina={"/usuarios"}/>
          <GestionarUsuarios />
        </Route>
        <Route path="/editarUsuario" exact>
          <NavBar  pagina={"/editarUsuario"}/>
          <EditarUsuario />
        </Route>
        <Route path="/Aventas" exact>
          <NavBar pagina={"/Aventas"} />
          <HeaderVenta/>
          <Ventas/>
        </Route>
        <Route path="/Nventa" exact>
          <NavBar pagina={"/Nventa"}/>
          <NVentas/>
        </Route>
        <Redirect component={NotFound}></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
