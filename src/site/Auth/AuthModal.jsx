import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavItem,
} from "reactstrap";
import Login from "./Login";
import Create from "./Create";

const AuthModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [signup, setSignup] = useState(false);
  const toggle = () => {
    setModal(!modal);
    setSignup(false);
  };

  const signupOpen = () => {
    setSignup(true);
  };

  const externalCloseBtn = (
    <button
      className="close"
      style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle}
    >
      &times;
    </button>
  );
  return (
    <>
      <NavItem className="btn-group">
        {/* <Button>Register</Button> */}
        <Button onClick={toggle}>Login</Button>
      </NavItem>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        external={externalCloseBtn}
      >
        {/* <ModalHeader>Modal title</ModalHeader> */}
        <ModalBody>
          {signup === false ? (
            <div>
              <Login
                updateToken={props.updateToken}
                open={open}
                setOpen={setOpen}
                displayEmail={props.displayEmail}
              />
            </div>
          ) : (
            <div style={{ display: "none" }}>
              <Login
                updateToken={props.updateToken}
                open={open}
                setOpen={setOpen}
                displayEmail={props.displayEmail}
              />
            </div>
          )}

          {/* GINGER MODAL */}

        {/* {signup === false ? 
        <div><Login updateToken={props.updateToken} open={open} setOpen={setOpen}/></div>
        :  <div style={{display: 'none'}}><Login updateToken={props.updateToken} open={open} setOpen={setOpen}/></div> }
        

        {signup === false ? <p><a href="#" onClick={signupOpen}>Create New Account</a><div style={{display: 'none'}}><Create updateToken={props.updateToken} open={open} setOpen={setOpen} /></div></p> : 
        <Create updateToken={props.updateToken} open={open} setOpen={setOpen} /> } */}


           {signup === false ? (
            <div>
              <a href="#" onClick={signupOpen}>
                Create New Account
              </a>
              <div style={{ display: "none" }}>
                <Create
                  updateToken={props.updateToken}
                  open={open}
                  setOpen={setOpen}
                  displayEmail={props.displayEmail}
                />
              </div>
            </div>
          ) : (
            <Create
              updateToken={props.updateToken}
              open={open}
              setOpen={setOpen}
              displayEmail={props.displayEmail}
            />
          )}


        </ModalBody>
      </Modal>
    </>
  );
};

export default AuthModal;
