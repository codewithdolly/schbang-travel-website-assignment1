import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Logo from "../Images/Logo.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <div className="container">
          {/* Left Column: Logo */}
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="120"
              height="auto"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          
          {/* Center Column: Navbar */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#discover">Discover</Nav.Link>
              <Nav.Link href="#social-deals">Social Deals</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
          {/* Right Column: Login and Signup Buttons */}
          <div className="ml-auto">
            <Button variant="outline-primary" className="mr-2">Login</Button>
            <Button variant="primary">Signup</Button>
          </div>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
