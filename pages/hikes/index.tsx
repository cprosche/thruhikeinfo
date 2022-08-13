import Layout from "../../components/layout/Layout";
import TrailList from "../../components/trail/TrailList";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import Row from "../../node_modules/react-bootstrap/esm/Row";

const TrailsIndex = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col style={{ minHeight: "78vh" }}>
            <TrailList />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default TrailsIndex;
