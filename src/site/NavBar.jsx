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
import { Route, Link, Switch } from "react-router-dom";
import LoggedIn from "./Auth/LoggedIn";
import EventInfo from "./Events/EventInfo";
import MessagesIndex from "./messages/MessagesIndex";

const NavigationBar = (props) => {
  const [open, setOpen] = useState(false);
  // const [email, setEmail] = useState("");
  // navbar collapses
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let email = localStorage.getItem('beastEmail');

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
  // const displayEmail = (email) => {
  //   setEmail(localStorage.getItem("beastEmail"));
  // };

  return (
    <div>
      <Navbar className="bg-body" id="navBar" dark expand="md">
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
                  
                />
              </NavItem>
            ) : (
              <NavItem id="loggedIn" disabled>
                {email === "" ? <p>Logged In</p> : <p>Welcome {email}</p>}
              </NavItem>
            )}

            <NavItem>
              {props.token === "" ? (
                ""

              ) : (<Link to="/"  style={{ textDecoration: 'none' }}>
                <div  id="homeBtn" >Home</div></Link>

              )}
            </NavItem>

            <NavItem>
              {props.token === "" ? (
                ""

              ) : (<Link to="/events" style={{ textDecoration: 'none' }}>
                <div  id="eventBtn">Events</div></Link>

              )}
            </NavItem>

            <NavItem>
              {props.token === "" ? (
                ""

              ) : (<Link to="/messageboard" style={{ textDecoration: 'none' }}>
                <div id="mbBtn">Message Board</div></Link>

              )}
            </NavItem>

            <NavItem>
              {props.token === "" ? (
                ""
              ) : (
                <div id="logoutBtn" onClick={props.clearToken}>
                  Logout
                </div>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div>
        <Switch>
          <Route exact path="/">
            <LoggedIn token={props.token} />
          </Route>
          <Route exact path="/events">
            <EventInfo token={props.token} />
          </Route>
          <Route exact path="/messageboard">
            <MessagesIndex token={props.token} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default NavigationBar;
