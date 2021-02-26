import React, { useState, useEffect } from 'react';

const EventDisplay = (props) => {
    const [events, setEvents] = useState([]);

    //This endpoint only returns the three soonest events
    const fetchEventInfo = () => {
        fetch("http://localhost:3000/events/ascdate", {
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

      useEffect(() => {
        fetchEventInfo();
      }, []);

      const eventMap = () => {
  
        return events.map((eventInfoUpdate, index) => {
          return(
            // <div>
    
            <div key={index} >
              <div id="singleEvent">
              <span style={{ fontSize: '1.5em' }}><b>{eventInfoUpdate.raceName}</b></span><br/>
              <span ><b>{eventInfoUpdate.location}</b></span><br/>
              <span><i>{eventInfoUpdate.date}</i></span><br/>
              <span><b>Length:<br/></b>{eventInfoUpdate.length}</span><br/>

              <span><b>Start time:</b><br/>{eventInfoUpdate.startTime}</span><br/>
              {/* </tr>
              <tr key={index}> */}
              {/* <span><b>Pack list:</b> <br/>{eventInfoUpdate.packList}</span><br/>
              <span><b>Lodging: </b><br/>{eventInfoUpdate.lodging}</span><br/>
              <span><b>Travel Plan: </b><br/>{eventInfoUpdate.travelPlan}</span><br/> */}
              </div>
            </div>
            
            // </div>
          )
        })
      }


    return ( 
        <div>
        {eventMap()}
        </div>
     );
}
 
export default EventDisplay;