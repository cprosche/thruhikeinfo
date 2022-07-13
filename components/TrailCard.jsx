import Link from "next/link";
import { Card, ListGroup } from "react-bootstrap";
import TrailLength from "./TrailLength";
import { countryCodes } from "data/countryCodes";

const TrailCard = ({ trail: { name, length, terminusA, terminusB } }) => (
  // TODO: improve layout
  <Card className="mb-3">
    <Card.Body>
      <Card.Title className="mb-1">{name}</Card.Title>
      <Card.Text>Country: {countryCodes[terminusA.country]}</Card.Text>
      {/* TODO: create terminus component */}
      {/* TODO: add loop trail support */}
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>
        <TrailLength length={length} />
      </ListGroup.Item>
      <ListGroup.Item>
        <Card.Text className="mb-1">
          Terminus A:{" "}
          <Link
            href={`https://maps.google.com/?q=${terminusA.location.latitude},${terminusA.location.longitude}`}
          >
            {terminusA.name + ", " + terminusA.city + ", " + terminusA.region}
          </Link>
        </Card.Text>
        <Card.Text className="text-muted mb-2">Estimated Best Start Date*: {terminusA.startDate}</Card.Text>
        <Card.Text className="mb-1">
          Terminus B:{" "}
          <Link
            href={`https://maps.google.com/?q=${terminusB.location.latitude},${terminusB.location.longitude}`}
          >
            {terminusB.name + ", " + terminusB.city + ", " + terminusB.region}
          </Link>
        </Card.Text>
        <Card.Text className="text-muted">Estimated Best Start Date*: {terminusB.startDate}</Card.Text>
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

export default TrailCard;
