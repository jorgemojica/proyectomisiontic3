import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from './components/login/login'
import Home from './components/1home/home'
import NotFound from './components/1home/components/NotFound';
import ListaProductos from './components/productos/components/producto_lista/Productos';
import Header from './components/productos/components/producto_lista/Header';
import Nproducto from './components/productos/components/producto_nuevo/Nproducto';
import NavBar from './components/1home/components/NavBar';
import GestionarUsuarios from './components/usuarios/GestionarUsuarios';
import EditarUsuario from './components/usuarios/EditarUsuario';
import Ventas from './components/ventas/components/administrador_Venta/Aventas'
import BarraVentas from './components/ventas/components/administrador_Venta/Barra'
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
          <NavBar />
          <Header />
          <ListaProductos />
        </Route>
        <Route path="/Nproducto" exact>
          <Nproducto />
        </Route>
        <Route path="/usuarios" exact>
          <NavBar />
          <GestionarUsuarios />
        </Route>
        <Route path="/editarUsuario" exact>
          <NavBar />
          <EditarUsuario />
        </Route>
        <Route path="/Aventas" exact>
          <NavBar />
          <HeaderVenta/>
          <BarraVentas/>
          <Ventas/>
        </Route>
        <Route path="/Nventa" exact>
          <NavBar />
          <NVentas/>
        </Route>
        <Redirect component={NotFound}></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
