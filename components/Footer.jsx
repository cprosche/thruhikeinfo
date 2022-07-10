import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => (
  <Container>
    <Row className="my-5">
      <Col lg={6}>
        <Link href={"https://www.caderosche.dev"}>Cade Rosche</Link> &copy;{" "}
        {new Date().getFullYear()}
      </Col>
      <Col lg={6} className="text-lg-end">
        <Link href={"https://github.com/cprosche"}>
          Soon, this will be an open source project...
        </Link>
      </Col>
    </Row>
  </Container>
);

export default Footer;
