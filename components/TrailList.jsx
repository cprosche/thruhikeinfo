import { list } from "data/trails";
import { Col, Container, Row } from "react-bootstrap";
import TrailCard from "./TrailCard";

const TrailList = () => (
  <Container className="mt-3" id="hikes">
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        {list.trails.map((trail) => (
          <TrailCard trail={trail} />
        ))}
      </Col>
    </Row>
  </Container>
);

export default TrailList;
