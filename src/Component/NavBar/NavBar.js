import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";

const NavBar = () => {
  const { user, signOutUser } = useFirebase();

  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/' className="fw-bold">
            Garage Bikey Moto
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto'>
              <Nav.Item>
                <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link>
              </Nav.Item>
              {user ? (
                <>
                  <Nav.Item>
                    <Nav.Link as={Link} to='/manageInventory'>
                      Manage Inventory
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to='/addNewInventory'>
                      Add Inventory
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to='/myInventories'>
                      My Inventories
                    </Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <></>
              )}
              <Nav.Item>
                <Nav.Link as={Link} to='/blog'>
                  Blog
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Nav.Item>
            <Nav.Link>
              {user ? (
                <Button onClick={signOutUser} variant='dark'>
                  LogOut
                </Button>
              ) : (
                <Button as={Link} to='login' variant='dark'>
                  LogIn
                </Button>
              )}
            </Nav.Link>
          </Nav.Item>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
