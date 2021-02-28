import React, { useState, useEffect } from 'react';

//This Component is for Displaying Message Board posts on the main LoggedIn.jsx page

const MessagesDisplay = (props) => {
    const [messages, setMessages] = useState([]);

    const fetchMessages = () => {
        fetch('http://localhost:3000/messageboard/', {
        method: "GET",
            headers: new Headers({
            'Content-Type': 'application/json',
            }),
        }) .then((res) => res.json())
        .then((logData) => {
            setMessages(logData);
            console.log(logData);
        });
    };

    //runes Message Fetch function once with component mount only
    useEffect(() => {
        fetchMessages();
      }, []);

      
      const mbMap = () => {
        //Because of .slice method will only return the most recent 10
        return messages.slice(0,11).map((messagesInfo) => {
          return(
            // <div>
    
            <div key={messagesInfo.id} >
              <div id="singleEvent">
              <span  style={{ fontSize: '1.5em' }}><b>{messagesInfo.raceName}</b></span><br/>
              <span>{messagesInfo.message}</span><br/>
              <span style={{ fontSize: '1em' }}><b><i>{messagesInfo.name}</i></b></span> -
              <span style={{ fontSize: '1em' }}><i>{messagesInfo.email}</i></span><br/>
              <span>{messagesInfo.createdAt.slice(0,10)}</span><br/>
              </div>
            </div>

          )
        })
      }

    

    return ( 
        <div>
          {messages !== undefined ? 
              mbMap() : ""}
        </div>
     );
} 
 
export default MessagesDisplay;

// pass mapping of every message, build a div or card, name, race, email, message
// Make calls for updates and displays message object