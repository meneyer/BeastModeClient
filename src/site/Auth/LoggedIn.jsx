import React from "react";
import EventInfo from "../Events/EventInfo";
import MessagesIndex from "../messages/MessagesIndex"

const LoggedIn = (props) => {
  return (
    <div>
      <p className="placeholder">Hello from LoggedIn</p>
      <EventInfo token={props.token} />
      <MessagesIndex token={props.token}/>
    </div>
  );
};

export default LoggedIn;
