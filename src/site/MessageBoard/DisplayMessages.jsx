import React from "react";

//This Component is for Displaying Message Board posts on the main LoggedIn.jsx page

const DisplayMessages = (props) => {
  return (
    <div style={{ backgroundColor: "lightcoral" }}>
      Hello From MessageBoard
      <p>Do we like the light gray or green background?</p>
    </div>
  );
};

export default DisplayMessages;

// pass mapping of every message, build a div or card, name, race, email, message
// Make calls for updates and displays message object
