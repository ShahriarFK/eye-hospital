import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';


const Header = () => {
  const { users, logOut } = useAuth();
  return (
    <>
      <Navbar className="py-3" bg="secondary" variant="dark" sticky="top" collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand href="#home" className="text-warning"><b>Melbourne EYE Hospital</b></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/" className="text-dark"><b>Home</b></Nav.Link>
            <Nav.Link as={Link} to="/treatments" className="text-dark"><b>Treatments</b></Nav.Link>

            {users?.email ?
              <Button onClick={logOut} variant="danger">Logout</Button> :
              <Nav.Link as={Link} to="/login"><b>Login Here</b></Nav.Link>}
            <Navbar.Text className="ms-5">
              Signed in as: <a className="text-decoration-none ms-2" href="#login">{users?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;