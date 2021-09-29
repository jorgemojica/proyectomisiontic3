import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const Logout = () =>{
    return(
        <div className="logout">
        <Link to="/">
        <Button className="logout" variant="outline-primary" >Logout</Button>
        </Link>
        </div>
    );
}

export default Logout;
