import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './components/login/login'
import Home from './components/1home/home'
import ListaProductos from './components/productos/components/producto_lista/Productos';
import Header from './components/productos/components/producto_lista/Header';
import Nproducto from './components/productos/components/producto_nuevo/Nproducto';
import NavBar from './components/1home/components/NavBar';
import GestionarUsuarios from './components/usuarios/GestionarUsuarios';
import EditarUsuario from './components/usuarios/EditarUsuario';
import Ventas from './components/ventas/components/administrador_Venta/Aventas'
import NVentas from './components/ventas/components/venta_nueva/Nventa'
import HeaderVenta from './components/ventas/components/administrador_Venta/Header'
import PrivateRoute from './components/login/PrivateRoute';

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
          <Header />
          <ListaProductos/>
        </PrivateRoute>

        <PrivateRoute path="/Nproducto" exact>
          <NavBar  pagina={"/Nproducto"}/>
          <Nproducto />
        </PrivateRoute>

        <PrivateRoute path="/usuarios" exact>
          <NavBar  pagina={"/usuarios"}/>
          <GestionarUsuarios />
        </PrivateRoute>

        <PrivateRoute path="/editarUsuario" exact>
          <NavBar  pagina={"/editarUsuario"}/>
          <EditarUsuario />
        </PrivateRoute>

        <PrivateRoute path="/Aventas" exact>
          <NavBar pagina={"/Aventas"} />
          <HeaderVenta/>
          <Ventas/>
        </PrivateRoute>

        <PrivateRoute path="/Nventa" exact>
          <NavBar pagina={"/Nventa"}/>
          <NVentas/>
        </PrivateRoute>
        
      </Switch>
    </Router>
  );
}

export default App;
