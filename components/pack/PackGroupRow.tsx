import { Col, Row } from "react-bootstrap";

const PackGroupRow = ({row}) => (
  <Row className="border-bottom border-secondary py-1">
    <Col xs={9}>{row.item}</Col>
    <Col xs={1} className="text-center">
      {row.quantity}
    </Col>
    <Col xs={2} className="text-end">
      {row.grams} {row.displayWeightUnits}
    </Col>
  </Row>
);

export default PackGroupRow;
