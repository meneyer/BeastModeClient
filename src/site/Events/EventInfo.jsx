import React, { useEffect, useState } from 'react';
// import {} from 'reactstrap';
import EventCreate from "./EventCreate";
import EventUpdate from "./EventUpdate";
import EventDelete from "./EventDelete";

const EventInfo = (props) => {

    const [events, setEvents] = useState([]);

    const fetchEventInfo = () => {
        fetch('http://localhost:3000/events/', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization' : props.token
            })
        }).then((res) => res.json())
        .then((logData) => {
            setEvents(logData)
            console.log(logData)
        })
    }

    useEffect(() => {
        fetchEventInfo();
    }, [])

    return (
        <div>
            Hello from Event Info
            <EventCreate token={props.token}/>
            <EventUpdate token={props.token}/>
            <EventDelete token={props.token}/>
            <h1>Enter Your Event Info Here!</h1>
        </div>
    );
}

export default EventInfo;