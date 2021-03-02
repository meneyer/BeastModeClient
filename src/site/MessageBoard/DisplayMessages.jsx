import { useState, useEffect } from 'react';

import MessagesIndex from "../messages/MessagesIndex";

const DisplayMessages = (props) => {
    const [messages, setMessages] = useState([]);

    const fetchMessages = () => {
        fetch("http://localhost:3000/messageboard/messages", {
        method: "GET",
        headers: new Headers({
          'Content-Type': 'application/json',
           Authorization: props.token,
            }),
        })
        .then((response) => response.json())
            .then((json) => {
                setMessages(json.results);
                console.log(json.results);
                console.log("MESSAGE fetch")
            });
    };
    
    // useEffect(() => {
    //     fetchMessages();
    // }, []);

    // const DisplayMessages = (props) => {
    //     return messages.map([])

    return (
        <div>
          {/* <button onclick={fetchMessages()}>Get Messages</button> */}
          <MessagesIndex>Posts</MessagesIndex>
        </div>
      );
    };
 
export default DisplayMessages;
