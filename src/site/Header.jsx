import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Alert,
  Button,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="shadow-lg p-2 mb-5 bg-body"
        id="navBar"
        dark
        expand="md"
      >
        <NavbarBrand>Beast : Mode</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button className="btn-secondary">Register</Button>
            </NavItem>
            <NavItem>
              <Button className="btn-outline-dark">Log In</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
