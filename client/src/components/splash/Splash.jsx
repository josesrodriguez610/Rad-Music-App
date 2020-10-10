import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Splash = ({ userLoggedIn, loginRedir }) => (
  <div className="splash-container">
    <div className="splash-page-navbar">
      <Navbar bg="dark" variant="dark" className="justify-content-end">
        <Nav className="mr-auto" className="justify-content-end">
          <Nav.Link onClick={() => loginRedir()}>Sign Up/Login</Nav.Link>
          {/* <Nav.Link>Add</Nav.Link> */}
        </Nav>
      </Navbar>
    </div>
    <div
      className="splash-page-content"
      style={{
        display: 'flex', justifyContent: 'center', marginTop: '300px', fontSize: '128pt',
      }}
    >
      RadMa
    </div>
    <div
      className="splash-page-sub-heading"
      style={{
        display: 'flex', justifyContent: 'center', fontSize: '24pt',
      }}
    >
      Totally Radically Live Music Assistant
      {/* THIS IS TO CHANGE OVER SHUFFLED ARRAY */}
    </div>
  </div>
);

export default Splash;
