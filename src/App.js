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
        <Redirect component={NotFound}></Redirect>
      </Switch>
    </Router>

  );
}

export default App;
