import React, { useState, useEffect } from 'react';

//This Component is for Displaying Message Board posts on the main LoggedIn.jsx page

const MessagesDisplay = (props) => {
    const [messages, setMessages] = useState('');
    const [email, setEmail] = useState('');
    const [raceName, setRaceName] = useState('');

    const fetchMessages = () => {
        fetch('http://localhost:3000/messageboard/', {
        method: "GET",
            headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: props.token,
            }),
        }) .then((res) => res.json())
        .then((logData) => {
            setMessages(logData);
            console.log(logData);
            console.log(messages[0])
            // setMessages(messages.slice(0,10))
        });
    };

    useEffect(() => {
        fetchMessages();
      }, []);

      
      const mbMap = () => {
        //Because of .slice method will only return the most recent 10
        return messages.map((messagesInfo) => {
          return(
            // <div>
    
            <div key={messagesInfo.id} >
              <div id="singleEvent">
              <span  style={{ fontSize: '1.5em' }}><b>{messagesInfo.raceName}</b></span><br/>
              <span>{messagesInfo.message}</span><br/>
              <span style={{ fontSize: '1em' }}><b><i>{messagesInfo.name}</i></b></span> -
              <span style={{ fontSize: '1em' }}><i>{messagesInfo.email}</i></span><br/>
              
              

              <span>Date: {messagesInfo.createdAt}</span><br/>
              {/* </tr>
              <tr key={index}> */}
              {/* <span><b>Pack list:</b> <br/>{messagesInfo.packList}</span><br/>
              <span><b>Lodging: </b><br/>{messagesInfo.lodging}</span><br/>
              <span><b>Travel Plan: </b><br/>{messagesInfo.travelPlan}</span><br/> */}
              </div>
            </div>
            
            // </div>
          )
        })
      }

    
    //COMMENT IN AND OUT THE {mbMap()} line below to turn on the message board messages...leaving it off for now because it throws an error on page refresh
    return ( 
        <div>

            {/* {mbMap()} */}
        </div>
     );
} 
 
export default MessagesDisplay;

// pass mapping of every message, build a div or card, name, race, email, message
// Make calls for updates and displays message object