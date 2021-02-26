import React, { useEffect, useState } from "react";
import {} from "reactstrap";
import EventCreate from "./EventCreate";
// import EventUpdate from "./EventUpdate";
import EventTableAndDelete from "./EventTableAndDelete";
import LoggedIn from "../Auth/LoggedIn";
import BeforeLogIn from "../Auth/BeforeLogin";


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
    console.log(eventInfoUpdate);
  };

  const updateOn = () => {
    setUpdateRace(true);
  };

  const updateOff = () => {
    setUpdateRace(false);
  };

  useEffect(() => {
    fetchEventInfo();
  }, []);


  //Below: Had to wrap the entire events display in a ternary so that you wouldn't see it if you weren't logged in with a token -Ginger

  return (


    <div style= {{paddingBottom: "50px", backgroundColor: "blueviolet"}}> { props.token === localStorage.getItem("token") ? <div>
      <p className="placeholder"></p>

      {/* <EventTableAndDelete token={props.token} events={events} editEvent={editEvent} updateOn={updateOn} fetchEventInfo={fetchEventInfo} /> */}

      <EventTableAndDelete token={props.token} events={events} editEvent={editEvent} updateOn={updateOn} updateOff={updateOff} fetchEventInfo={fetchEventInfo} updateRace={updateRace} updateEvent={updateEvent}/>
      
      {/* <EventUpdate token={props.token} /> */}
      {/* {updateRace ? <EventUpdate updateEvent={updateEvent} token={props.token} updateOff={updateOff}  fetchEventInfo={fetchEventInfo}/> : <></>} */}
          
      <EventCreate token={props.token} fetchEventInfo = {fetchEventInfo}/> </div> : <BeforeLogIn /> }

    <div id="eventInfoBG" style={{ paddingBottom: "50px" }}>
      {props.token === localStorage.getItem("token") ? (
        <div>
          <Resources />
          {/* <EventTableAndDelete token={props.token} events={events} editEvent={editEvent} updateOn={updateOn} fetchEventInfo={fetchEventInfo} /> */}
          <EventTableAndDelete
            token={props.token}
            events={events}
            editEvent={editEvent}
            updateOn={updateOn}
            updateOff={updateOff}
            fetchEventInfo={fetchEventInfo}
            updateRace={updateRace}
            updateEvent={updateEvent}
          />
          {/* <EventUpdate token={props.token} /> */}
          {/* {updateRace ? <EventUpdate updateEvent={updateEvent} token={props.token} updateOff={updateOff}  fetchEventInfo={fetchEventInfo}/> : <></>} */}
          <EventCreate token={props.token} fetchEventInfo={fetchEventInfo} />{" "}
        </div>
      ) : (
        <BeforeLogIn />
      )}


      {/* <EventCreate token={props.token} /> */}
    </div>
    </div>
  );
};

export default EventInfo;
