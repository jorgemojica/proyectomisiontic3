import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from'./components/login/login'
import Home from './components/1home/home'
import NotFound from './components/1home/components/NotFound';

function App(){
  return (
    <Router>
      <Switch>
        
      <Route path="/" exact>
        <Login/>
      </Route>

      <Route path="/home" exact>
        <Home/>
      </Route> 
      <Redirect component={NotFound}></Redirect>
      </Switch>
    </Router>
    
  );
}

export default App;
