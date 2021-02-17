import React, {useState} from 'react';
// import Button from '@material-ui/core/Button';
// import * as Mui from '@material-ui/core';
import {Button} from "reactstrap";

import AuthModal from './Auth/AuthModal';


const NavigationBar = (props) => {

  const [open, setOpen] = useState(false);
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
            Hello from Navbar!!

            {props.token === "" ? <AuthModal updateToken={props.updateToken} open={open} setOpen={setOpen}/> : <span> LOGGED IN </span>}
            {props.token === "" ? "" :
            <Button variant="contained" color='primary' onClick={props.clearToken}>Logout</Button>}
            

        </div>
    );
}

export default NavigationBar;