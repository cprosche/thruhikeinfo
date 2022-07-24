import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "../node_modules/next/link";
import { Colors } from "../utils/colors";

// TODO: add trail slang dictionary
const Header = () => (
  <Navbar style={{ backgroundColor: Colors.grey }}>
    <Container>
      <Navbar.Brand href="/">Thru Hike Info</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#hikes">Hikes</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
