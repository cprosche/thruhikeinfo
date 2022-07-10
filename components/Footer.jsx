import { Row, Col, Container } from "react-bootstrap";

const Footer = () => (
  <Container>
    <Row>
      <Col>
        Cade Rosche &copy; {new Date().getFullYear()}
      </Col>
    </Row>
  </Container>
);

export default Footer;
