import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
     <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Thru Hike Planning</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#hikes">Hikes</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
