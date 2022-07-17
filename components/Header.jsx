import { Navbar, Nav, Container } from "react-bootstrap";

// TODO: add about page
// TODO: add trail slang dictionary
const Header = () => (
  <Navbar bg="dark" variant="dark">
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
