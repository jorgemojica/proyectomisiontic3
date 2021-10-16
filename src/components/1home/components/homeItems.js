import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards";
import Items from "./items.json";
const homeItems = () => {

  return (
    <Container>
      <Row>
          <Col xs={4}>
            <Cards/>
          </Col>
      </Row>
    </Container>
  );
};

export default homeItems;