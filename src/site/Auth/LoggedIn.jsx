import React from "react";
import EventInfo from "../Events/EventInfo";

const LoggedIn = (props) => {
  return (
    <div>
      <p className="placeholder"></p>
      <EventInfo token={props.token} />
    </div>
  );
};

export default LoggedIn;
