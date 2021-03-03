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


//This Component is for Displaying Message Board posts on the main LoggedIn.jsx page

const MessageUpdateDelete= (props) => {
 
 const deleteMessage = () => {
   fetch(`http://localhost:3000/messageboard/delete/:id`, {
     method: "DELETE",
     headers: new Headers({
       "Content-Type": "application/json",
       Authorization: props.token,
   }),
   }).then(() => props.fetchMessage());
 };
  


    // //runes Message Fetch function once with component mount only
    // useEffect(() => {
    //     fetchMessages();
    //   }, []);

      
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
              //TODO: UPDATE BUTTON Here
            <Button color="danger" onClick={() =>
            }>Delete</Button>
              </div>
              
            </div>

          )
        })
      }

    

    return ( 
        <div>
          {messages !== undefined ? 
              mbMap() : ""}
              <ButtonToggle color='danger'>danger</ButtonToggle>{''}
        </div>
     );
} 
 
export default MessageUpdateDelete;

// pass mapping of every message, build a div or card, name, race, email, message
// Make calls for updates and displays message object