import React, { useState, useEffect } from 'react';
import {
    Table,
    Container,
    Button,
    UncontrolledPopover,
    PopoverHeader,
    PopoverBody,
    Collapse,
  } from "reactstrap";
  import MessagesUpdate from "./MessagesUpdate";


//This Component is for Displaying Message Board posts on the main LoggedIn.jsx page

const MessageUpdateDelete= (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  console.log(props.updateMessage);
 
 const deleteMessage = (messagesInfo) => {
   fetch(`http://localhost:3000/messageboard/delete/${messagesInfo.id}`, {
      method: "DELETE",
     headers: new Headers({
       "Content-Type": "application/json",
       Authorization: props.token,
   }),
   }).then(() => fetchMessages());
 };

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
      //ADDED ABOVE LINE!!!!!
      
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

                {/* UPDATE BUTTON */}
                <Button
                    className="tableBtn updateBtn"
                    id="Popover1"
                    onClick={() => {
                      // props.editMessage(messagesInfo);
                      toggle();
                    }}
                  >Update</Button>
                  {popoverOpen ? (
                    <MessagesUpdate
                      updateMessage={props.updateMessage}
                      token={props.token}
                      updateOff={props.updateOff}
                      fetchMessages={props.fetchMessages}
                      popoverOpen={popoverOpen}
                      toggle={toggle}
                    />
                  ) : (
              <></>
            )}

                {/* DELETE BUTTON   */}
                <Button color="danger" onClick={() =>
                deleteMessage(messagesInfo)}>Delete</Button>
              </div>
              
            </div>

          )
        })
      }

    

    return ( 
        <div>
        Hello from MessageUpdateDelete
          {messages !== undefined ?
          mbMap() : "" }
          {/* //     <ButtonToggle color='danger'>danger</ButtonToggle>{''} */}
        </div>
     );
} 
 
export default MessageUpdateDelete;

// pass mapping of every message, build a div or card, name, race, email, message
// Make calls for updates and displays message object