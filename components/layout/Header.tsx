import Container from "../../node_modules/react-bootstrap/esm/Container";
import Nav from "../../node_modules/react-bootstrap/esm/Nav";
import Navbar from "../../node_modules/react-bootstrap/esm/Navbar";
import { Colors } from "../../utils/colors";

const Header = () => (
  <Navbar style={{ backgroundColor: Colors.grey }} collapseOnSelect expand="lg">
    <Container>
      <Navbar.Brand href="/">Thru Hike Info</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/hikes">Hikes</Nav.Link>
          <Nav.Link href="/submission">Submit A Hike</Nav.Link>
          <Nav.Link href="/slang">Trail Slang</Nav.Link>
          <Nav.Link href="/budget">Budget Calculator</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
