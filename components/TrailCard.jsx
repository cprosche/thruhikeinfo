import { Card } from "react-bootstrap";

const TrailCard = ({
  trail: { name, length, terminusA, terminusB, description },
}) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>Length: {length} miles</Card.Text>
      <Card.Text>Terminus A: {terminusA}</Card.Text>
      <Card.Text>Terminus B: {terminusB}</Card.Text>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default TrailCard;
