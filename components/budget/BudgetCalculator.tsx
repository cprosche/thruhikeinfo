import { useReducer } from "react";
import Card from "../../node_modules/react-bootstrap/esm/Card";
import Form from "../../node_modules/react-bootstrap/esm/Form";
import InputGroup from "../../node_modules/react-bootstrap/esm/InputGroup";

const ACTIONS = {
  SET_STATE: 1,
};

const { SET_STATE } = ACTIONS;

const reducer = (state, { type = null, payload = null }) => {
  switch (type) {
    case SET_STATE:
      return { ...state, ...payload };
    default:
      return { ...state };
  }
};

const initialState = {
  length: 2200,
  mileage: 15,
  gearCost: 1000,
  travelToCost: 100,
  travelFromCost: 100,
  dailyCost: 35,
};

// TODO: make reusable
// TODO: improve
const BudgetCalculator = () => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  const total =
    state.dailyCost * (state.length / state.mileage) + state.gearCost;

  return (
    <Card className="mt-5 shadow-sm">
      <Card.Body>
        <Card.Title>Thru Hike Budget Calculator</Card.Title>
        <Card.Subtitle className="text-muted mb-4">
          Calculate how much it will cost to thru hike a trail.
        </Card.Subtitle>
        <Form.Label>Length of trail: </Form.Label>
        <Form.Control
          className="mb-3"
          min={0}
          size="sm"
          type="number"
          value={state.length}
          onChange={(event) =>
            dispatch({
              type: SET_STATE,
              payload: { length: event.target.value },
            })
          }
        />
        <Form.Label>Distance hiked per day: </Form.Label>
        <Form.Control
          className="mb-3"
          min={0}
          size="sm"
          type="number"
          value={state.mileage}
          onChange={(event) =>
            dispatch({
              type: SET_STATE,
              payload: { mileage: event.target.value },
            })
          }
        />
        <Form.Label>Daily: </Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            min={0}
            size="sm"
            type="number"
            value={state.dailyCost}
            onChange={(event) =>
              dispatch({
                type: SET_STATE,
                payload: { dailyCost: event.target.value },
              })
            }
          />
        </InputGroup>
        <Form.Label>Gear: </Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            min={0}
            size="sm"
            type="number"
            value={state.gearCost}
            onChange={(event) =>
              dispatch({
                type: SET_STATE,
                payload: { gearCost: event.target.value },
              })
            }
          />
        </InputGroup>
        <Form.Label>Travel to start point: </Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            min={0}
            size="sm"
            type="number"
            value={state.travelToCost}
            onChange={(event) =>
              dispatch({
                type: SET_STATE,
                payload: { travelToCost: event.target.value },
              })
            }
          />
        </InputGroup>
        <Form.Label>Travel from end point: </Form.Label>
        <InputGroup className="mb-4">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            min={0}
            size="sm"
            type="number"
            value={state.travelFromCost}
            onChange={(event) =>
              dispatch({
                type: SET_STATE,
                payload: { travelFromCost: event.target.value },
              })
            }
          />
        </InputGroup>
        <Card.Text className="lead">
          Total (USD): {formatter.format(total)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BudgetCalculator;
