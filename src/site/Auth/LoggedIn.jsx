import React from 'react';
import EventInfo from "../Events/EventInfo"

const LoggedIn = (props) => {
    return ( 
        <div>
            Hello from LoggedIn
            <EventInfo token={props.token}/>
        </div>
    );
}

export default LoggedIn;