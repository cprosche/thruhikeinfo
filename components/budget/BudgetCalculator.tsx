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

// TODO: add toggle for daily/weekly/monthly allowance
const BudgetCalculator = ({
  length = 2200,
  mileage = 15,
  gearCost = 1500,
  travelToCost = 250,
  travelFromCost = 250,
  dailyCost = 35,
  lengthDisabled = false,
}) => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const [state, dispatch] = useReducer(reducer, {
    length,
    mileage,
    gearCost,
    travelToCost,
    travelFromCost,
    dailyCost,
  });

  const total =
    state.dailyCost * Math.ceil(state.length / state.mileage) +
    state.gearCost +
    state.travelToCost +
    state.travelFromCost;

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Thru Hike Budget Calculator</Card.Title>
        <Card.Subtitle className="text-muted mb-4">
          Calculate how much it will cost to thru hike a trail.
        </Card.Subtitle>
        <Form.Label>Length Of Trail (miles/km): </Form.Label>
        <Form.Control
          className="mb-3"
          min={0}
          size="sm"
          type="number"
          value={state.length}
          onChange={(event) =>
            dispatch({
              type: SET_STATE,
              payload: { length: parseInt(event.target.value) },
            })
          }
          disabled={lengthDisabled}
        />
        <Form.Label>Distance Hiked Per Day: </Form.Label>
        <Form.Control
          className="mb-3"
          min={0}
          size="sm"
          type="number"
          value={state.mileage}
          onChange={(event) =>
            dispatch({
              type: SET_STATE,
              payload: { mileage: parseInt(event.target.value) },
            })
          }
        />
        <Card.Subtitle className="text-muted mb-3">
          {state.length} / {state.mileage} ={" "}
          {Math.ceil(state.length / state.mileage)} days to complete the hike
        </Card.Subtitle>
        <Form.Label>
          Daily Allowance (hotels, resupply, shuttles, beer, etc.):
        </Form.Label>
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
                payload: { dailyCost: parseInt(event.target.value) },
              })
            }
          />
        </InputGroup>
        <Card.Subtitle className="text-muted mb-3">
          {Math.ceil(state.length / state.mileage)} days * ${state.dailyCost}
          /day = ${Math.ceil(state.length / state.mileage) * state.dailyCost}
        </Card.Subtitle>
        <Form.Label>Total Gear Allowance: </Form.Label>
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
                payload: { gearCost: parseInt(event.target.value) },
              })
            }
          />
        </InputGroup>
        <Form.Label>Cost Of Travel To Start Point: </Form.Label>
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
                payload: { travelToCost: parseInt(event.target.value) },
              })
            }
          />
        </InputGroup>
        <Form.Label>Cost Of Travel From End Point: </Form.Label>
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
                payload: { travelFromCost: parseInt(event.target.value) },
              })
            }
          />
        </InputGroup>
        <Card.Text className="lead">
          Estimated Total Budget (USD):{" "}
          <span style={{ fontWeight: 700 }}>{formatter.format(total)}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BudgetCalculator;
