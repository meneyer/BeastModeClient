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
  Button,
} from "reactstrap";
import Logo from "./assets/BeastLogo.png";
import AuthModal from "./Auth/AuthModal";

const NavigationBar = (props) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
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
  const displayEmail = (email) => {
    setEmail(localStorage.getItem("beastEmail"));
  };

  return (
    <div>
      <Navbar className="shadow p-2 mb-5 bg-body" id="navBar" dark expand="md">
        <NavbarBrand className="brandName">
          <img src={Logo} id="logo" alt="logo" />
          BEAST : MODE
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {props.token === "" ? (
              <NavItem className="btn-group">
                <AuthModal
                  updateToken={props.updateToken}
                  open={open}
                  setOpen={setOpen}
                  displayEmail={displayEmail}
                />
              </NavItem>
            ) : (
              <NavItem id="loggedIn" disabled>
                {email === "" ? <p>Logged In</p> : <p>Welcome, {email}</p>}
              </NavItem>
            )}
            <NavItem>
              {props.token === "" ? (
                ""
              ) : (
                <Button onClick={props.clearToken}>Logout</Button>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
