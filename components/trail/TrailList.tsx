import { useEffect, useState } from "react";
import { Months } from "../../data/months";
import { trails } from "../../data/trails";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import Form from "../../node_modules/react-bootstrap/esm/Form";
import InputGroup from "../../node_modules/react-bootstrap/esm/InputGroup";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import { Colors } from "../../utils/colors";
import TrailCard from "./TrailCard";

// TODO: change search to just "display: none" components to preserve state
// TODO: trail filter options set from url params
// TODO: filter by continent
// TODO: filter by region/state
// TODO: filter by time to complete

// TODO: big project - add map
// TODO: sort by terminus distance from certain post code???
const TrailList = () => {
  let totalLength = 0;
  for (let i = 0; i < trails.length; i++) {
    totalLength += trails[i].length;
  }

  const sortedTrails = trails.sort((a, b) => a.length - b.length);
  const [trailsList, setTrailsList] = useState(sortedTrails);
  const [filterTerm, setFilterTerm] = useState("");
  const [units, setUnits] = useState("miles");

  // advanced filters
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [filterMonth, setFilterMonth] = useState(0);
  const [maxLength, setMaxLength] = useState("");
  const [minLength, setMinLength] = useState("");

  const toggleUnits = () => {
    units === "miles" ? setUnits("kilometers") : setUnits("miles");
  };

  // filters based on filter term, start month, min/max length
  useEffect(() => {
    let newTrailList = sortedTrails.filter((trail) =>
      trail.name.toLowerCase().includes(filterTerm.toLowerCase())
    );
    if (showAdvanced) {
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
      if (minLength != "" || maxLength != "") {
        let lengthMultiplier = units === "kilometers" ? 1.61 : 1;
        let minLengthInt = minLength === "" ? 0 : parseInt(minLength);
        let maxLengthInt = maxLength === "" ? Infinity : parseInt(maxLength);
        newTrailList = newTrailList.filter((trail) => {
          let trailLength = trail.length * lengthMultiplier;
          if (trailLength > minLengthInt && trailLength < maxLengthInt)
            return true;
          return false;
        });
      }
    }

    setTrailsList(newTrailList);
  }, [
    minLength,
    maxLength,
    filterTerm,
    filterMonth,
    setTrailsList,
    units,
    showAdvanced,
  ]);

  return (
    <Container className="mt-5" id="hikes">
      <Row>
        <Col lg={12} className="text-center">
          <h2 className="mb-0" style={{ fontWeight: 700 }}>
            Thru Hikes
          </h2>
          <p>
            {trails.length} hikes, {totalLength.toLocaleString("en-US")} miles
            total
          </p>
        </Col>
        <Col lg={{ span: 8, offset: 2 }}>
          <Row>
            <Col xs={12} sm>
              <Form.Control
                className="mb-2 shadow-sm"
                placeholder="Filter by trail name"
                onChange={(event) => setFilterTerm(event.target.value)}
                style={{ color: Colors.brown }}
              />
            </Col>
            <Col
              xs={6}
              sm={5}
              md={4}
              className="mb-2 d-flex align-items-center"
            >
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
            <Col
              xs={6}
              sm={12}
              className="mb-2 d-flex justify-content-end justify-content-sm-start"
            >
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Advanced filters"
                checked={showAdvanced}
                onChange={() => setShowAdvanced(!showAdvanced)}
              />
            </Col>
            {showAdvanced && (
              <>
                <Col md={6}>
                  <Form.Select
                    className={
                      "mb-3 shadow-sm" +
                      (filterMonth === 0 ? " text-muted" : "")
                    }
                    value={filterMonth}
                    onChange={(event) =>
                      setFilterMonth(parseInt(event.target.value))
                    }
                  >
                    <option value={0} className="text-muted">
                      Start month
                    </option>
                    {Months.map((month, index) => (
                      <option
                        value={index + 1}
                        key={index}
                        className="text-dark"
                      >
                        {month}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
                <Col md={6}>
                  <Row>
                    <Col xs={6} className="pe-1">
                      <InputGroup className="mb-3 shadow-sm">
                        <Form.Control
                          placeholder="Min"
                          value={minLength}
                          onChange={(event) => setMinLength(event.target.value)}
                          style={{ color: Colors.brown }}
                        />
                        <InputGroup.Text>
                          {units === "miles" ? "miles" : "km"}
                        </InputGroup.Text>
                      </InputGroup>
                    </Col>
                    <Col xs={6} className="ps-1">
                      <InputGroup className="mb-3 shadow-sm">
                        <Form.Control
                          placeholder="Max"
                          value={maxLength}
                          onChange={(event) => setMaxLength(event.target.value)}
                          style={{ color: Colors.brown }}
                        />
                        <InputGroup.Text>
                          {units === "miles" ? "miles" : "km"}
                        </InputGroup.Text>
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
              </>
            )}
          </Row>
        </Col>
        <Col lg={{ span: 8, offset: 2 }} style={{ minHeight: 500 }}>
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
