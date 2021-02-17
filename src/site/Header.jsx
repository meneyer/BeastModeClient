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
      <Navbar id="navBar" dark expand="md">
        <NavbarBrand>Beast : Mode</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Button>Register</Button>
            </NavItem>
            <NavItem>
              <NavLink href="/">Log In</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Nope</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;