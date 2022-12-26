import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/allcountry">All Countries</Nav.Link>
            <Nav.Link href="/records">MyRecords</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

    </>
  );
}

export default NavBar;