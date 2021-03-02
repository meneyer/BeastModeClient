import React, { useState, useEffect } from "react";
import MessagesCreate from "./MessagesCreate";
import MessagesEdit from "./MessagesEdit";
import BeforeLogIn from "../Auth/BeforeLogin";

const Messages = (props) => {
  const [messages, setMessages] = useState([]);
  const [email, setEmail] = useState("");
  const [raceName, setRaceName] = useState("");

const fetchMessages = () => {
  fetch("http://localhost:3000/messageboard/", {
      method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
           Authorization: props.token,
        }),
      })
       .then((res) => res.json())
      .then((logData) => {
        setMessages(logData);
        console.log(logData);
      });
  };

 useEffect(() => {
        fetchMessages();
      }, []);
      
  // const [modal, setModal = useState(false);

  //Below: Had to wrap the entire events display in a ternary so that you wouldn't see it if you were'e loggedin with a token - Ginger
  return (
      <div id="messagesIndex" style={{ backgroundColor: "darkgoldenrod" }}>
        { props.token === localStorage.getItem("token")   ? 
          <div>
            <p className="placeholder">Hello there from Message Index</p>
            <MessagesEdit>test</MessagesEdit>
            <MessagesCreate token={props.token} fetchMessages = {fetchMessages}/>

          </div>
        : (
          <BeforeLogIn />
        )}
    </div>
  );
};


export default Messages;
