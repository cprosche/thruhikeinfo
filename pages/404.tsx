import HomeButton from "../components/HomeButton";
import Layout from "../components/layout/Layout";
import Col from "../node_modules/react-bootstrap/esm/Col";
import Container from "../node_modules/react-bootstrap/esm/Container";
import Row from "../node_modules/react-bootstrap/esm/Row";

const FourOhFour = () => (
  <Layout>
    <Container>
      <Row>
        <Col className="text-center p-5">
          <h1>404 Page Not Found</h1>
          <h3 className="mb-4">
            Sorry, the page you are looking for doesn't exist.
          </h3>
          <HomeButton />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default FourOhFour;
