import { Col, Row } from "react-bootstrap";
import PackGroupRow from "./PackGroupRow";

const PackGroup = ({ name, rows }) => (
  <Row className="mb-5">
    <Col md={{ span: 8, offset: 2 }}>
      <Row className="align-items-end border-bottom border-secondary py-1 fw-bold">
        <Col xs={9} className="fs-5">
          {name}
        </Col>
        <Col xs={1} className="text-center">
          Qty
        </Col>
        <Col xs={2} className="text-end">
          Weight
        </Col>
      </Row>
      {rows.map((row) => (
        <PackGroupRow key={row.item} row={row} />
      ))}
      <Row className="py-1 fw-bold">
        <Col xs={6}>Total</Col>
        <Col xs={6} className="text-end">
          {rows.reduce((acc, curr) => acc + curr.grams, 0)} g
        </Col>
      </Row>
    </Col>
  </Row>
);

export default PackGroup;
