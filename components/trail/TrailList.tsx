import { useReducer } from "react";
import { Months } from "../../data/months";
import { trails } from "../../data/trails";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import Form from "../../node_modules/react-bootstrap/esm/Form";
import InputGroup from "../../node_modules/react-bootstrap/esm/InputGroup";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import { Colors } from "../../utils/colors";
import { getTotalLength } from "../../utils/getTotalLength";
import TrailCard from "./TrailCard";

// TODO: change search to just "display: none" components to preserve state
// TODO: trail filter options set from url params
// TODO: filter by region/state
// TODO: filter by time to complete

// TODO: big project - add map
// TODO: sort by terminus distance from certain post code???

// set our actions, int values in a switch are very slightly the fastest
// link: https://stackoverflow.com/questions/34571231/javascript-performance-switch-integer-vs-switch-string
const ACTIONS = {
  TOGGLE_ADVANCED_FILTERS: 1,
  RESET: 2,
  TOGGLE_UNITS: 3,
  SET_FILTER: 4,
};

const { TOGGLE_ADVANCED_FILTERS, RESET, TOGGLE_UNITS, SET_FILTER } = ACTIONS;

const initialState = {
  showAdvanced: false,
  totalLength: getTotalLength(trails),
  continents: Array.from(new Set(trails.map((trail) => trail.continent))),
  allTrailsSorted: trails.sort((a, b) => a.length - b.length),
  units: "miles",
  filterTerm: "",
  filterMonth: 0,
  filterContinent: 0,
  minLength: 0,
  maxLength: Infinity,
  trailsList: trails.sort((a, b) => a.length - b.length),
};

const reducer = (state, { type = null, payload = null }) => {
  switch (type) {
    case RESET:
      return { ...state, ...initialState };
    case TOGGLE_ADVANCED_FILTERS:
      return { ...state, showAdvanced: !state.showAdvanced };
    case TOGGLE_UNITS:
      return {
        ...state,
        units: state.units === "miles" ? "kilometers" : "miles",
      };
    case SET_FILTER:
      return {
        ...state,
        ...payload,
        trailsList: filterTrailsList(state, payload),
      };
    default:
      return { ...state };
  }
};

const filterTrailsList = (state: any, payload: any) => {
  const updatedState = { ...state, ...payload };
  let trailsList = state.allTrailsSorted;
  if (updatedState.filterTerm != "") {
    trailsList = trailsList.filter((trail) =>
      trail.name.toLowerCase().includes(updatedState.filterTerm.toLowerCase())
    );
  }
  if (updatedState.showAdvanced) {
    if (updatedState.filterMonth != 0) {
      trailsList = trailsList.filter(
        (trail) =>
          (trail.terminusA.startDate != null &&
            trail.terminusA.startDate.month == updatedState.filterMonth) ||
          (trail.terminusB &&
            trail.terminusB.startDate != null &&
            trail.terminusB.startDate.month == updatedState.filterMonth)
      );
    }
    if (updatedState.filterContinent != 0) {
      const continent =
        updatedState.continents[updatedState.filterContinent - 1];
      trailsList = trailsList.filter((trail) => trail.continent === continent);
    }
    if (updatedState.minLength != 0 || updatedState.maxLength != Infinity) {
      let lengthMultiplier = updatedState.units === "kilometers" ? 1.61 : 1;
      trailsList = trailsList.filter((trail) => {
        let trailLength = trail.length * lengthMultiplier;
        if (
          trailLength > updatedState.minLength &&
          trailLength < updatedState.maxLength
        )
          return true;
        return false;
      });
    }
  }
  return trailsList;
};

const TrailList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container className="mt-5" id="hikes">
      <Row>
        <Col lg={12} className="text-center">
          <h2 className="mb-0" style={{ fontWeight: 700 }}>
            Thru Hikes
          </h2>
          <p>
            {trails.length} hikes, {state.totalLength.toLocaleString("en-US")}{" "}
            miles total
          </p>
        </Col>
        <Col lg={{ span: 8, offset: 2 }}>
          <Row>
            <Col xs={12} sm>
              <Form.Control
                className="mb-2 shadow-sm"
                placeholder="Filter by trail name"
                onChange={(event) =>
                  dispatch({
                    type: SET_FILTER,
                    payload: { filterTerm: event.target.value },
                  })
                }
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
                onChange={() => dispatch({ type: TOGGLE_UNITS })}
                checked={state.units === "miles"}
              />
              <Form.Check
                inline
                id="kilometers"
                label="kilometers"
                name="units"
                type="radio"
                value="miles"
                onChange={() => dispatch({ type: TOGGLE_UNITS })}
                checked={state.units === "kilometers"}
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
                checked={state.showAdvanced}
                onChange={() => dispatch({ type: TOGGLE_ADVANCED_FILTERS })}
              />
            </Col>
            {state.showAdvanced && (
              <>
                <Col md={6}>
                  <Form.Select
                    className={
                      "mb-3 shadow-sm" +
                      (state.filterMonth === 0 ? " text-muted" : "")
                    }
                    value={state.filterMonth}
                    onChange={(event) =>
                      dispatch({
                        type: SET_FILTER,
                        payload: { filterMonth: parseInt(event.target.value) },
                      })
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
                  <Form.Select
                    className={
                      "mb-3 shadow-sm" +
                      (state.filterContinent === 0 ? " text-muted" : "")
                    }
                    value={state.filterContinent}
                    onChange={(event) =>
                      dispatch({
                        type: SET_FILTER,
                        payload: {
                          filterContinent: parseInt(event.target.value),
                        },
                      })
                    }
                  >
                    <option value={0} className="text-muted">
                      Continent
                    </option>
                    {state.continents.map((continent, index) => (
                      <option
                        value={index + 1}
                        key={index}
                        className="text-dark"
                      >
                        {continent}
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
                          value={state.minLength == 0 ? "" : state.minLength}
                          onChange={(event) =>
                            dispatch({
                              type: SET_FILTER,
                              payload: {
                                minLength:
                                  event.target.value === ""
                                    ? 0
                                    : parseInt(event.target.value),
                              },
                            })
                          }
                          style={{ color: Colors.brown }}
                        />
                        <InputGroup.Text>
                          {state.units === "miles" ? "miles" : "km"}
                        </InputGroup.Text>
                      </InputGroup>
                    </Col>
                    <Col xs={6} className="ps-1">
                      <InputGroup className="mb-3 shadow-sm">
                        <Form.Control
                          placeholder="Max"
                          value={
                            state.maxLength == Infinity ? "" : state.maxLength
                          }
                          onChange={(event) =>
                            dispatch({
                              type: SET_FILTER,
                              payload: {
                                maxLength:
                                  event.target.value === ""
                                    ? Infinity
                                    : parseInt(event.target.value),
                              },
                            })
                          }
                          style={{ color: Colors.brown }}
                        />
                        <InputGroup.Text>
                          {state.units === "miles" ? "miles" : "km"}
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
          {state.trailsList.length > 0 ? (
            state.trailsList.map((trail) => (
              <TrailCard trail={trail} key={trail.name} units={state.units} />
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
