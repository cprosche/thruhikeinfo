import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layout/Layout";

// TODO: dummy data
// TODO: create row component
// TODO: create row group component
// TODO: add group functionality
// TODO: add item functionality
// TODO: create chart component with basic addition
// TODO: improve chart component
// TODO: add login
// TODO: create api
// TODO: add CRUD to api
// TODO: add list name
// TODO: responsive
// TODO: add print/export pdf packing list
const Shakedown = () => {
  const user = {
    id: "1",
    username: "caderosche",
    picture: "/face.jpeg",
  };
  const pack = {
    userId: "1",
    name: "2022 CT Thru Hike",
    rows: [
      { item: "ULA Ohm", grams: 125, quantity: 1 },
      { item: "Nemo Hornet", grams: 522, quantity: 1 },
      { item: "Thermarest", grams: 231, quantity: 1 },
      { item: "Tent Stake", grams: 11, quantity: 8 },
    ],
  };
  return (
    <Layout>
      <Container>
        <Row>
          <Col xl={6}>
            <h1>{pack.name}</h1>
          </Col>
          <Col xl={6} className="d-flex justify-content-end align-items-center">
            <div className="me-3">{user.username}</div>
            <Image
              className="rounded-circle"
              src={user.picture}
              alt=""
              width={50}
              height={50}
            />
          </Col>
          <Col md={{ span: 6, offset: 3 }}>
            {pack.rows.map((row) => (
              <div className="d-flex justify-content-between align-items-center border-bottom border-secondary py-1">
                <div>
                  {row.quantity} {row.item}
                </div>
                <div>{row.grams} grams</div>
              </div>
            ))}
            <div className="d-flex justify-content-between align-items-center py-1">
              <div>Total</div>
              <div>
                {pack.rows.reduce((acc, curr) => acc + curr.grams, 0)} grams
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Shakedown;
