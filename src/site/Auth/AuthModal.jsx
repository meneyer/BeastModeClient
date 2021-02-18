import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
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
      <Button onClick={toggle}>Login</Button>
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
              />
            </div>
          ) : (
            <div style={{ display: "none" }}>
              <Login
                updateToken={props.updateToken}
                open={open}
                setOpen={setOpen}
              />
            </div>
          )}

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
                />
              </div>
            </div>
          ) : (
            <Create
              updateToken={props.updateToken}
              open={open}
              setOpen={setOpen}
            />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default AuthModal;
