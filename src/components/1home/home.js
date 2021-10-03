//import { Link } from 'react-router-dom';
import "./home.css"
import NavBar from './components/NavBar';
import Cards from "./components/Cards";
import Logout from "./components/logout"

const home = () => {
    return ( 
      <div className="divHome">
      
      <NavBar pagina={"/home"}/>
      <Logout/>
      <h1 className="text-center mt-5 mb-5">INFORMES GENERALES</h1>
      <Cards />
      </div>
    );
}
  
export default home;