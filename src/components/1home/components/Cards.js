import Card from "react-bootstrap/Card";
import Items from "./items.json";
const Cards = () => {
    return(
      <Card style={{ width: '580px' }}>
        {Items.map((item) => (

        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Img variant="top" src={item.url}/>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>{item.text}</Card.Text>
        </Card.Body>

        ))}
      </Card>
    );
}

export default Cards;