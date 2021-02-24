import React from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BeforeLogIn from "./BeforeLogin";
import Dashboard from "./Dashboard";





const LoggedIn = (props) => {
  return (


      <div>
    {props.token === localStorage.getItem("token") ? 
    
      <Dashboard token={props.token} loggedInVsOut={props.loggedInVsOut}/>
    : 
      <BeforeLogIn updateToken={props.updateToken} loggedInVsOut={props.loggedInVsOut}/>}
      </div>


  );
};

export default LoggedIn;

