import { CardGroup } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Zapa from './zapaNike.png'
import User from './user.png'
import Zapatos from './zapatos-deportivos-3-1.jpg.opdownload'
//import Placeholder from 'react-bootstrap/Placeholder'

const Cards = () => {
    return(
    <CardGroup>
      <Card style={{ width: '580px' }}>
        <Card.Body>
          <Card.Title>ARTICULO MAS VENDIDO</Card.Title>
          <Card.Img variant="top" src={Zapa} height='300px'/>
          <Card.Text>Zapatilla Nike</Card.Text>
          <Card.Text>200 U$D</Card.Text>
          </Card.Body>
      </Card>

      <Card style={{ width: '640px' }}>
        <Card.Body>
          <Card.Title>MEJOR VENDEDOR</Card.Title>
          <Card.Img variant="top" src={User} width='150px' height='300px'/>
          <Card.Text>Alvaro Garcia</Card.Text>
          <Card.Text>50 Ventas</Card.Text>
          </Card.Body>
      </Card>

      <Card style={{ width: '640px' }}>
        <Card.Body>
          <Card.Title>CATEGORIA MAS VENDIDA</Card.Title>
          <Card.Img variant="top" src={Zapatos}/>
          <Card.Text>Zapatos</Card.Text>
          <Card.Text>Deportivos</Card.Text>
          </Card.Body>
      </Card>
    </CardGroup>
    );
}

export default Cards;