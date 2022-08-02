import { useEffect, useState } from "react";
import { Months } from "../../data/months";
import { trails } from "../../data/trails";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import Form from "../../node_modules/react-bootstrap/esm/Form";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import { Colors } from "../../utils/colors";
import TrailCard from "./TrailCard";

// TODO: change search to just "display: none" components to preserve state
// TODO: trail filter options set from url params
// TODO: filter by continent
// TODO: filter by region/state
// TODO: filter by length/time

// TODO: big project - add map
// TODO: sort by terminus distance from certain post code???
const TrailList = () => {
  const sortedTrails = trails.sort((a, b) => a.length - b.length);
  const [trailsList, setTrailsList] = useState(sortedTrails);
  const [filterTerm, setFilterTerm] = useState("");
  const [filterMonth, setFilterMonth] = useState(0);
  const [units, setUnits] = useState("miles");

  const toggleUnits = () => {
    units === "miles" ? setUnits("kilometers") : setUnits("miles");
  };

  // filters based on filter term && month
  useEffect(() => {
    let newTrailList = sortedTrails.filter((trail) =>
      trail.name.toLowerCase().includes(filterTerm.toLowerCase())
    );
    if (filterMonth != 0) {
      newTrailList = newTrailList.filter(
        (trail) =>
          (trail.terminusA.startDate != null &&
            trail.terminusA.startDate.month == filterMonth) ||
          (trail.terminusB &&
            trail.terminusB.startDate != null &&
            trail.terminusB.startDate.month == filterMonth)
      );
    }
    setTrailsList(newTrailList);
  }, [filterTerm, filterMonth, setTrailsList]);

  return (
    <Container className="mt-5" id="hikes">
      <Row>
        <Col lg={12} className="text-center">
          <h2 className="mb-0" style={{ fontWeight: 700 }}>
            Thru Hikes
          </h2>
          <p>{trails.length} hikes total</p>
        </Col>
        <Col lg={{ span: 6, offset: 3 }}>
          <Row>
            <Col md={6}>
              <Form.Control
                className="mb-3 shadow-sm"
                placeholder="Filter by trail name"
                onChange={(event) => setFilterTerm(event.target.value)}
                style={{ color: Colors.brown }}
              />
            </Col>
            <Col md={6}>
              <Form.Select
                className={
                  "mb-3 shadow-sm" + (filterMonth === 0 ? " text-muted" : "")
                }
                defaultValue={0}
                onChange={(event) =>
                  setFilterMonth(parseInt(event.target.value))
                }
              >
                <option value={0} className="text-muted">
                  Filter by start month
                </option>
                {Months.map((month, index) => (
                  <option value={index + 1} key={index} className="text-dark">
                    {month}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col md={12} className="mb-3 ps-3">
              <Form.Check
                inline
                id="miles"
                label="miles"
                value="miles"
                name="units"
                type="radio"
                onChange={toggleUnits}
                checked={units === "miles"}
              />
              <Form.Check
                inline
                id="kilometers"
                label="kilometers"
                name="units"
                type="radio"
                value="miles"
                onChange={toggleUnits}
                checked={units === "kilometers"}
              />
            </Col>
          </Row>
        </Col>
        <Col lg={{ span: 6, offset: 3 }} style={{ minHeight: 500 }}>
          {trailsList.length > 0 ? (
            trailsList.map((trail) => (
              <TrailCard trail={trail} key={trail.name} units={units} />
            ))
          ) : (
            <div>No results</div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TrailList;
