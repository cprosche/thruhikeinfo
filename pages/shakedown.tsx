import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layout/Layout";
import PackGroup from "../components/pack/PackGroup";

// TODO: add group functionality
// TODO: add item functionality
// TODO: create chart component with basic addition
// TODO: improve chart component
// TODO: add login
// TODO: create api
// TODO: add CRUD to api
// TODO: responsive
// TODO: add print/export pdf packing list
// TODO: add coloration for each group
// TODO: add row ordering/reordering via dragging
// TODO: worn weight
// TODO: consumable
// TODO: item reuse
// TODO: item cost
const Shakedown = () => {
  const user = {
    id: "1",
    username: "caderosche",
    picture: "/face.jpeg",
  };
  const pack = {
    userId: "1",
    name: "2022 CT Thru Hike",
    groups: [
      {
        name: "Pack",
        rows: [
          { item: "ULA Ohm", grams: 125, displayWeightUnits: "g", quantity: 1 },
          {
            item: "Pack Liner",
            grams: 22,
            displayWeightUnits: "g",
            quantity: 1,
          },
        ],
      },
      {
        name: "Sleep",
        rows: [
          {
            item: "Nemo Hornet",
            grams: 522,
            displayWeightUnits: "g",
            quantity: 1,
          },
          {
            item: "Thermarest",
            grams: 231,
            displayWeightUnits: "g",
            quantity: 1,
          },
          {
            item: "Tent Stake",
            grams: 11,
            displayWeightUnits: "g",
            quantity: 8,
          },
        ],
      },
    ],
  };
  return (
    <Layout>
      <Container>
        <Row className="mb-5">
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
        </Row>
        {pack.groups.map((group) => (
          <PackGroup rows={group.rows} name={group.name} />
        ))}
      </Container>
    </Layout>
  );
};

export default Shakedown;
