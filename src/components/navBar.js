import { Nav, Navbar, Container } from "react-bootstrap";

export const NavBar = () => {
  return (
    <div className="App">
      
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">CellTap</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Productos</Nav.Link>
              <Nav.Link href="#pricing">Novedades</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

    </div>
  );
};
