import React from 'react';
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap'

const NavBar = () => {
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
            <div
              className='collapse navbar-collapse justify-content-center'
            >
              <Nav.Item>
                <Nav.Link href='/home'>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-1'>Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-2'>Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='disabled' disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default NavBar;