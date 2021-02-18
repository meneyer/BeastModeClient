import React, { useState } from "react";
// import Button from '@material-ui/core/Button';
// import * as Mui from '@material-ui/core';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
} from "reactstrap";
import AuthModal from "./Auth/AuthModal";

const NavigationBar = (props) => {
  const [open, setOpen] = useState(false);

  // navbar collapses
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // const [signup, setSignup] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  //   setSignup(false);
  // };

  // const signupOpen = () => {
  //   setSignup(true);
  // }

  // const signupClosed =() => {
  //   setSignup(false);
  // }

  return (
    <div>
      <Navbar className="shadow p-2 mb-5 bg-body" id="navBar" dark expand="md">
        <NavbarBrand>LOGO HERE</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="btn-group">
              {props.token === "" ? (
                <AuthModal
                  updateToken={props.updateToken}
                  open={open}
                  setOpen={setOpen}
                />
              ) : (
                <span> LOGGED IN </span>
              )}
              {props.token === "" ? (
                ""
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={props.clearToken}
                >
                  Logout
                </Button>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
