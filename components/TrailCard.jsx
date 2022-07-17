import { Card, ListGroup, Badge } from "react-bootstrap";
import TrailLength from "./TrailLength";
import { countryCodes } from "../data/countryCodes";
import TrailTerminus from "./TrailTerminus";
import TrailName from "./TrailName";

const TrailCard = ({
  trail: { name, type, length, offRoadLength, terminusA, terminusB = null },
}) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title className="mb-1">
        <TrailName name={name} length={length} offRoadLength={offRoadLength} />
      </Card.Title>
      <Card.Text>Country: {countryCodes[terminusA.country]}</Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>
        <TrailLength length={length} />
      </ListGroup.Item>
      <ListGroup.Item>
        <Card.Text className="mb-2">Trail Type: {type}</Card.Text>
        {type === "Linear" ? (
          <>
            <Card.Text className="mb-1">
              <TrailTerminus terminus={terminusA} label={"Terminus A"} />
            </Card.Text>
            <Card.Text className="text-muted mb-2">
              Estimated Best Start Date*: {terminusA.startDate ?? "N/a"}
            </Card.Text>
            <Card.Text className="mb-1">
              <TrailTerminus terminus={terminusB} label={"Terminus B"} />
            </Card.Text>
            <Card.Text className="text-muted">
              Estimated Best Start Date*: {terminusB.startDate ?? "N/a"}
            </Card.Text>
          </>
        ) : (
          <>
            <Card.Text className="mb-1">
              <TrailTerminus terminus={terminusA} label={"Recommended Start"} />
            </Card.Text>
            <Card.Text className="text-muted mb-2">
              Estimated Best Start Date*: {terminusA.startDate ?? "N/a"}
            </Card.Text>
          </>
        )}
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

export default TrailCard;
