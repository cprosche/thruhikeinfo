import { useState } from "react";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Form from "../../node_modules/react-bootstrap/esm/Form";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import { useSendEmailMutation } from "../../rtk/trailsApi";

const TrailReview = () => {
  const [email, setEmail] = useState("");
  const [sendEmail, { isError, isSuccess }] = useSendEmailMutation();

  return (
    <>
      <p>Sorry, trail reviews aren't available yet 🙁</p>
      <p>
        Enter your email address below and we will let you know when they are
        available!
      </p>
      <Row>
        <Col xs={12} lg={6}>
          <Form.Control
            className="mb-2"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            className="mb-2"
            variant="secondary"
            onClick={() => sendEmail(email)}
          >
            Submit Email
          </Button>
          {isSuccess && <div className="text-success">Email submitted!</div>}
          {isError && (
            <div className="text-danger">
              Email submission failed. This may be because you have already
              submitted your email address or the address is invalid.
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};

export default TrailReview;
