import React, {useState, useEffect} from 'react';
import MessagesCreate from './MessagesCreate';
import MessagesEdit from './MessagesEdit';

const Messages = (props) => {
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
      });
  };

    return (
        <div>
          <p className="placeholder"></p>
  
        <MessagesEdit>test</MessagesEdit>
        <MessagesCreate token={props.token} fetchMessages = {fetchMessages}/>
    </div>
    );
}

export default Messages;