import Container from "../node_modules/react-bootstrap/esm/Container";
import Nav from "../node_modules/react-bootstrap/esm/Nav";
import Navbar from "../node_modules/react-bootstrap/esm/Navbar";
import { Colors } from "../utils/colors";

// TODO: add trail slang dictionary
const Header = () => (
  <Navbar style={{ backgroundColor: Colors.grey }}>
    <Container>
      <Navbar.Brand href="/">Thru Hike Info</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/#hikes">Hikes</Nav.Link>
        <Nav.Link href="/submission">Submit A Hike</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
