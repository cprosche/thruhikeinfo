import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => (
  <Container>
    <Row className="py-5 align-items-center">
      <Col lg={3}>
        <div>
          <Link href={"https://www.caderosche.dev"}>Cade Rosche</Link> &copy;{" "}
          {new Date().getFullYear()}
        </div>
        <div>v0-alpha</div>
      </Col>
      <Col lg={6} className="text-lg-center">
        *This data is estimated and should not be relied upon without further
        research. It is meant as a starting point for hike planning, not as the
        only information used to plan your thru hike.
      </Col>
      <Col lg={3} className="text-lg-end">
        <a href="https://github.com/cprosche">
          Soon, this will be open source...
        </a>
      </Col>
    </Row>
  </Container>
);

export default Footer;
