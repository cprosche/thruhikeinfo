import Link from "next/link";
import { Card } from "react-bootstrap";

const TrailCard = ({
  trail: { name, length, terminusA, terminusB, description },
}) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>Length: {length} miles</Card.Text>
      <Card.Text>
        Terminus A:{" "}
        <Link
          href={`https://maps.google.com/?q=${terminusA.location.latitude},${terminusA.location.longitude}`}
        >
          {terminusA.name}
        </Link>
      </Card.Text>
      <Card.Text>
        Terminus B:{" "}
        <Link
          href={`https://maps.google.com/?q=${terminusB.location.latitude},${terminusB.location.longitude}`}
        >
          {terminusB.name}
        </Link>
      </Card.Text>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default TrailCard;
