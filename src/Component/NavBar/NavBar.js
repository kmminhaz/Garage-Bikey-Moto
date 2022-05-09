import React from "react";
import { Link } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";

const NavBar = () => {
  const { user, signOutUser } = useFirebase();

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Garage Bikey
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-center'>
            <Nav.Item>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
            </Nav.Item>
            {user ? (
              <>
                <Nav.Item>
                  <Nav.Link as={Link} to='/'>
                    Manage Items
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to='/'>
                    Add Item
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to='/'>
                    My items
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
          </div>
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
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
