import React, { useEffect, useState } from "react";
import {} from 'reactstrap';
import EventCreate from "./EventCreate";
// import EventUpdate from "./EventUpdate";
import EventTableAndDelete from "./EventTableAndDelete";

const EventInfo = (props) => {
  const [events, setEvents] = useState([]);
  const [updateRace, setUpdateRace] = useState(false);
  const [updateEvent, setUpdateEvent] = useState({});

  const fetchEventInfo = () => {
    fetch("http://localhost:3000/events/", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        setEvents(logData);
        console.log(logData);
      });
  };

  const editEvent = (eventInfoUpdate) => {
    setUpdateEvent(eventInfoUpdate);
    console.log(eventInfoUpdate)
  }

  const updateOn = () => {
    setUpdateRace(true);
  }

  const updateOff = () => {
    setUpdateRace(false);
  }

  useEffect(() => {
    fetchEventInfo();
  }, []);

  return (
    <div>
      <p className="placeholder"></p>
      
      {/* <EventTableAndDelete token={props.token} events={events} editEvent={editEvent} updateOn={updateOn} fetchEventInfo={fetchEventInfo} /> */}

      <EventTableAndDelete token={props.token} events={events} editEvent={editEvent} updateOn={updateOn} updateOff={updateOff} fetchEventInfo={fetchEventInfo} updateRace={updateRace} updateEvent={updateEvent}/>
      
      {/* <EventUpdate token={props.token} /> */}
      {/* {updateRace ? <EventUpdate updateEvent={updateEvent} token={props.token} updateOff={updateOff}  fetchEventInfo={fetchEventInfo}/> : <></>} */}
      
      <EventCreate token={props.token} fetchEventInfo = {fetchEventInfo}/>
      {/* <EventCreate token={props.token} /> */}

      
    </div>
  );
};

export default EventInfo;
