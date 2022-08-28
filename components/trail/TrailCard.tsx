import TrailLength from "./TrailLength";
import TrailTerminus from "./TrailTerminus";
import TrailName from "./TrailName";
import Card from "../../node_modules/react-bootstrap/esm/Card";
import ListGroup from "../../node_modules/react-bootstrap/esm/ListGroup";
import { months } from "../../data/months";
import RegionText from "./RegionText";
import Link from "../../node_modules/next/link";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index";
import { faArrowRight } from "../../node_modules/@fortawesome/free-solid-svg-icons/index";

// TODO: make estimated start date component
const TrailCard = ({
  trail: {
    slug,
    name,
    type,
    length,
    offRoadLength,
    continent,
    terminusA,
    terminusB = null,
  },
  units,
}) => (
  <Card className="mb-3 shadow-sm" id={slug}>
    <Card.Body>
      <Card.Title className="mb-1 text-bold">
        <TrailName
          name={name}
          slug={slug}
          length={length}
          offRoadLength={offRoadLength}
        />
      </Card.Title>
      <Card.Text className="mb-0">
        <RegionText termini={{ terminusA, terminusB }} />
      </Card.Text>
      <Card.Text>Continent: {continent}</Card.Text>
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
                ? months[terminusA.startDate.month - 1] +
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
                ? months[terminusB.startDate.month - 1] +
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
                ? months[terminusA.startDate.month - 1] +
                  " " +
                  terminusA.startDate.day
                : "N/a"}
            </Card.Text>
          </>
        )}
      </ListGroup.Item>
      <ListGroup.Item>
        <Link
          href={`/hikes/${slug}`}
          className="btn btn-primary"
          style={{ textTransform: "capitalize", fontWeight: 700 }}
        >
          <Button>
            More details <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Link>
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

export default TrailCard;
