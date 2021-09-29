// {BrowserRouter as Router} from "react-router-dom";
import './login.css'
import logo from './FIUMBA.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

const login = () => {
      return(
        <Form method="POST" className="formLogin">
          <div className="title">
            <h1>Sistema de ventas</h1> 
          </div>
            
          <div className="text-center">  
          <Image src={logo} height="120px" width="120px" roundedCircle/> 
          </div>
          
          <Container>
            <div className="userDiv">
              <Form.Label><b>Username or email</b></Form.Label>
              <Form.Control type="email"></Form.Control>
            </div>
          
            <div className="passwordDiv">
              <Form.Label><b>Password</b></Form.Label>
              <Form.Control type="password"></Form.Control>
            </div>

            <div className="text-center">
            <Link to="/home">
            <Button type="submit" variant="primary">Login</Button>
            </Link>
            </div>
            
            <div className="forgotPassword">
            <Link to="/">¿Olvidó su contraseña?</Link>
            </div>

            </Container>
      </Form>
      );
}

export default login;