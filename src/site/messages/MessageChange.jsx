import React, { useState, useEffect } from 'react'
import {
    Table,
    Container,
    Button,
    UncontrolledPopover,
    PopoverHeader,
    PopoverBody,
    Collapse,
  } from "reactstrap";
  import MessagesDisplay from '../messages/MessagesDisplay';

  const MessageUpdateDelete= (props) => {

    const [messages, setMessages] =useState([]);
const deleteMessage = (messages) => {
  fetch(`http://localhost:3000/messageboard/delete/id`, {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: props.token,
  }),
  }).then(() => props.fetchMessages());
};
<div>
    <>
<MessagesDisplay token={props.token} />
</>

</div>



export default MessageChange;