import Layout from "../components/Layout";
import Col from "../node_modules/react-bootstrap/esm/Col";
import Container from "../node_modules/react-bootstrap/esm/Container";
import Row from "../node_modules/react-bootstrap/esm/Row";

const FourOhFour = () => (
  <Layout>
    <Container>
      <Row>
        <Col className="text-center p-5" style={{ minHeight: "78vh" }}>
          <h1>404 Page Not Found</h1>
          <h3 className="mb-4">
            Sorry, the page you are looking for doesn't exist.
          </h3>
          <a className="btn btn-secondary" href="/">
            Hike Back Home
          </a>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default FourOhFour;
