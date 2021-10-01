import Nav from 'react-bootstrap/Nav'
const NavBar = () => {
    return(
        <Nav justify variant="tabs" defaultActiveKey="/home" className="explorer">
        <Nav.Item>
            <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link eventKey="link-1">VENTAS</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link href="/producto" eventKey="link-2">PRODUCTOS</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link href="/usuarios" eventKey="link-3">USUARIOS</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link eventKey="link-4">ROLES</Nav.Link>
        </Nav.Item>
        
        </Nav>

    );
}

export default NavBar;