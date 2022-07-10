import { trails } from "data/trails";
import { Col, Container, Row } from "react-bootstrap";
import TrailCard from "./TrailCard";

const TrailList = () => (
  <Container className="mt-5" id="hikes">
    <Row>
      <Col lg={12} className="text-center">
        <h2 className="mb-0">Thru Hikes</h2>
        <p>{trails.length} hikes total</p>
      </Col>
      <Col lg={{ span: 6, offset: 3 }}>
        {trails.map((trail, index) => (
          <TrailCard trail={trail} key={index} />
        ))}
      </Col>
    </Row>
  </Container>
);

export default TrailList;
