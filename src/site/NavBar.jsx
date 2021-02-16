import React, {useState} from 'react';
// import Button from '@material-ui/core/Button';
// import * as Mui from '@material-ui/core';
import {Button, Modal} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import Create from './Auth/Create';
import Login from './Auth/Login';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const NavigationBar = (props) => {
    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [signup, setSignup] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSignup(false);
  };

  const signupOpen = () => {
    setSignup(true);
  }

  const signupClosed =() => {
    setSignup(false);
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {signup === false ? 
        <Login updateToken={props.updateToken} open={open} setOpen={setOpen} /> : ""}
      {signup === false ? <div><a href="#" onClick={signupOpen}>Create New Account</a></div> : 
      <Create updateToken={props.updateToken} open={open} setOpen={setOpen} /> }
      {/* <SimpleModal /> */}
    </div>
  );


    return (
        

        <div>
            Hello from Navbar!!
            {props.token === "" ? <Button variant="contained" color="secondary" onClick={handleOpen}>Sign In/Create Account</Button> : <span> LOGGED IN </span>}
            {props.token === "" ? "" :
            <Button variant="contained" color='primary' onClick={props.clearToken}>Logout</Button>}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {body}
            </Modal>

        </div>
    );
}

export default NavigationBar;