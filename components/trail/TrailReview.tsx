import { useState } from "react";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Form from "../../node_modules/react-bootstrap/esm/Form";
import Row from "../../node_modules/react-bootstrap/esm/Row";

const TrailReview = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("none");

  const sendEmail = () => {
    fetch(
      `https://thruhikeinfo-signup.up.railway.app/v1/signup?email=${email}`,
      {
        method: "POST",
        headers: {
          "X-Api-Key": "d41d8cd98f00b204e9800998ecf8427e",
        },
      }
    )
      .then(
        async (res) => {
          const resJson = await res.json();
          console.log(res.status);
          if (res.status != 202) {
            setMessage("failure");
          } else {
            setMessage("success");
          }
        },
        async (error) => {
          const resJson = await error.json();
          console.log(error.status);
          if (error.status != 202) {
            setMessage("failure");
          } else {
            setMessage("success");
          }
        }
      )
      .catch(() => {
        setMessage("failure");
      });
  };
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
          <Button className="mb-2" variant="secondary" onClick={sendEmail}>
            Submit Email
          </Button>
          <div className="text-danger">{message}</div>
        </Col>
      </Row>
    </>
  );
};

export default TrailReview;
