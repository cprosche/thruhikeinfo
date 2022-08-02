import TrailLength from "./TrailLength";
import TrailTerminus from "./TrailTerminus";
import TrailName from "./TrailName";
import Card from "../../node_modules/react-bootstrap/esm/Card";
import ListGroup from "../../node_modules/react-bootstrap/esm/ListGroup";
import { Months } from "../../data/months";
import CountryText from "./CountryText";

// TODO: make estimated start date component
const TrailCard = ({
  trail: {
    name,
    type,
    length,
    offRoadLength,
    trailAssociation,
    terminusA,
    terminusB = null,
  },
  units,
}) => (
  <Card className="mb-3 shadow-sm">
    <Card.Body>
      <Card.Title className="mb-1">
        <TrailName name={name} length={length} offRoadLength={offRoadLength} />
      </Card.Title>
      <Card.Text>
        <CountryText termini={{ terminusA, terminusB }} />
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>
        <TrailLength length={length} units={units} />
      </ListGroup.Item>
      <ListGroup.Item>
        <Card.Text className="mb-2">Trail Type: {type}</Card.Text>
        {type === "Linear" ? (
          <>
            <Card.Text className="mb-1">
              <TrailTerminus terminus={terminusA} label={"Terminus A"} />
            </Card.Text>
            <Card.Text className="text-muted mb-2">
              Estimated Best Start Date*:{" "}
              {terminusA.startDate
                ? Months[terminusA.startDate.month - 1] +
                  " " +
                  terminusA.startDate.day
                : "N/a"}
            </Card.Text>
            <Card.Text className="mb-1">
              <TrailTerminus terminus={terminusB} label={"Terminus B"} />
            </Card.Text>
            <Card.Text className="text-muted">
              Estimated Best Start Date*:{" "}
              {terminusB.startDate
                ? Months[terminusB.startDate.month - 1] +
                  " " +
                  terminusB.startDate.day
                : "N/a"}
            </Card.Text>
          </>
        ) : (
          <>
            <Card.Text className="mb-1">
              <TrailTerminus terminus={terminusA} label={"Recommended Start"} />
            </Card.Text>
            <Card.Text className="text-muted mb-2">
              Estimated Best Start Date*:{" "}
              {terminusA.startDate
                ? Months[terminusA.startDate.month - 1] +
                  " " +
                  terminusA.startDate.day
                : "N/a"}
            </Card.Text>
          </>
        )}
      </ListGroup.Item>
      {trailAssociation && (
        <ListGroup.Item>
          <Card.Text>
            Trail Association:{" "}
            <a href={trailAssociation.url}>{trailAssociation.name}</a>
          </Card.Text>
        </ListGroup.Item>
      )}
    </ListGroup>
  </Card>
);

export default TrailCard;
