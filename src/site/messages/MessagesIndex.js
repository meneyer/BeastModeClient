import React, { useState, useEffect } from "react";
import MessagesCreate from "./MessagesCreate";
import BeforeLogIn from "../Auth/BeforeLogin";
import MessageUpdateDelete from "../messages/MessageUpdateDelete";


const Messages = (props) => {
  const [messages, setMessages] = useState([]);
  const [updateMessage, setUpdateMessage] = useState({});
  const [updateRace, setUpdateRace] = useState(false);
  const [logData, setLogData] = useState([]);
  
  const fetchforId = () => {
    fetch("http://localhost:3000/messageboard/yours", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        setLogData(logData);
        console.log(logData)
        if (logData.length === 0) {
          localStorage.setItem("owner", 0)
          
        } else {
          localStorage.setItem("owner", logData[0].owner);
        }
      
        console.log(localStorage.getItem("owner"));
      });
  };



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
  const editMessage = (messagesInfo) => {
    setUpdateMessage(messagesInfo);
    console.log(messagesInfo);
  };

  const updateOn = () => {
    setUpdateRace(true);
  };

  const updateOff = () => {
    setUpdateRace(false);
  };

 useEffect(() => {
        fetchforId();
        fetchMessages();
      }, []);
      

  //Below: Had to wrap the entire events display in a ternary so that you wouldn't see it if you were'e loggedin with a token - Ginger
  return (
      <div id="messagesIndex" >
        { props.token === localStorage.getItem("token")   ? 
          <div>
            {/* <p className="placeholder">Hello there from Message Index</p> */}
            <div id="displayMessages">
              <MessageUpdateDelete 
              token={props.token} 
              messages={messages}
              fetchMessages = {fetchMessages} 
              updateOn={updateOn}
              updateOff={updateOff}
              editMessage={editMessage}
              updateMessage={updateMessage}
              updateRace={updateRace}
              fetchforId={fetchforId}
              />
            </div>
            {/* <MessagesEdit>test</MessagesEdit> */}
            <MessagesCreate token={props.token} fetchMessages = {fetchMessages}/>

          </div>
        : (
          <BeforeLogIn />
        )}
    </div>
  );
};


export default Messages;
