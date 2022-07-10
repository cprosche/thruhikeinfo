import { trails } from "data/trails";
import { Col, Container, Row } from "react-bootstrap";
import TrailCard from "./TrailCard";

const TrailList = () => (
  <Container className="mt-5" id="hikes">
    <Row>
      <Col lg={12}>
        <h2 className="text-center mb-3">Hikes</h2>
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
