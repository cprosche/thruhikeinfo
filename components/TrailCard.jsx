import { Card, ListGroup } from "react-bootstrap";
import TrailLength from "./TrailLength";
import { countryCodes } from "../data/countryCodes";
import TrailTerminus from "./TrailTerminus";

// TODO: improve layout
// TODO: add loop trail support
const TrailCard = ({ trail: { name, length, terminusA, terminusB } }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title className="mb-1">{name}</Card.Title>
      <Card.Text>Country: {countryCodes[terminusA.country]}</Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>
        <TrailLength length={length} />
      </ListGroup.Item>
      <ListGroup.Item>
        <Card.Text className="mb-1">
          <TrailTerminus terminus={terminusA} label={"Terminus A"} />
        </Card.Text>
        <Card.Text className="text-muted mb-2">
          Estimated Best Start Date*: {terminusA.startDate}
        </Card.Text>
        <Card.Text className="mb-1">
          <TrailTerminus terminus={terminusB} label={"Terminus B"} />
        </Card.Text>
        <Card.Text className="text-muted">
          Estimated Best Start Date*: {terminusB.startDate}
        </Card.Text>
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

export default TrailCard;
