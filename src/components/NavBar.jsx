import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  // const [userInfo, setUserInfo] = useState(
  //   sessionStorage.getItem("userInfo") || []
  // );


  const handleSignout = (e) => {
    // sessionStorage.removeItem("userInfo")
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/allcountry">All Countries</Nav.Link>
            <Nav.Link href="/records">MyRecords</Nav.Link>
            {/* {userInfo.length == 0 ? (
              <Nav.Link href="/signin">Signin</Nav.Link>
            ) : (
              <Nav.Link href="/" onClick={handleSignout}>Signout</Nav.Link>
            )} */}
          </Nav>
        </Container>
      </Navbar>
      <br />

    </>
  );
}

export default NavBar;