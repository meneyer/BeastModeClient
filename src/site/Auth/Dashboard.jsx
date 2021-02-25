import React from "react";
import EventInfo from "../Events/EventInfo";
import MessagesIndex from "../messages/MessagesIndex";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import {container, row, col} from 'bootstrap'
import { Container, Row, Col } from "reactstrap";
import DisplayMessages from "../MessageBoard/DisplayMessages";
import EventDisplay from "../Events/EventDisplay";

const localizer = momentLocalizer(moment);

//test array of events for now to try out calendar
let events = [
  {
    title: "Big Mommas Day",
    start: 20210220,
    end: 20210220,
    allDay: false,
    resource: "blah",
  },
  {
    title: "Birthday",
    start: 20210225,
    end: 20210225,
    allDay: true,
    resource: "blah",
  },
];

const Dashboard = (props) => {
  return (
    <div>
      <div id="heroIntro">
        <p className="intro">Prepare.Yourself</p>
      </div>

      <Container>
        <Row>
          <Col md="6">
            <div className="columnHeader" style={{ width: "90%" }}>
              <h2>Calendar</h2>
            </div>
            <EventCalendar />
            <div
              className="columnHeader"
              style={{ width: "90%", marginTop: "40px" }}
            >
              <h2>Upcoming Events</h2>
            </div>
            <div id="displayEvents">
              <EventInfo token={props.token} />
            </div>
          </Col>

          <Col md="6">
            <div className="columnHeader" style={{ width: "90%" }}>
              <h2>Message Board</h2>
            </div>
            <div id="displayMessages">
              <MessagesIndex token={props.token} />
              <DisplayMessages />
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    //     <div>
    //       <p className="placeholder"></p>
    //       <EventInfo token={props.token} />

    //     </div>
  );
};

const Dashboard = (props) => {
    return ( 
        <div id="loggedInPage">
        <div id="heroIntro">
          <p className="intro">Prepare.Yourself</p>
        </div>
        <p className="placeholder"></p>
  
     
        <Container>
          
          <Row>
  
            <Col md="6">
              <div className="columnHeader" style={{ width: "90%"}}>
                <h2>Calendar</h2>
              </div>
              <EventCalendar />
              <div className="columnHeader" style={{ width: "90%", "marginTop": "40px"}}><h2>Upcoming Events</h2></div>
              <div id="displayEvents">
                <EventDisplay token={props.token} />
              </div>
            </Col>
            
            <Col md="6">
              <div className="columnHeader" style={{width: "90%"}}>
                <h2>Message Board</h2>
              </div>
              <div id="displayMessages">
                <MessagesIndex token={props.token}/>
                <DisplayMessages />
              </div>
            </Col>
            
          </Row>
        </Container>
        </div>
        
  
  //     <div>
  //       <p className="placeholder"></p>
  //       <EventInfo token={props.token} />
  
  //     </div>
     );
}
 
export default Dashboard;

const EventCalendar = (props) => (
  <div id="calendar">
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 320, width: 320 }}
    />
  </div>
);
