import React, { useState } from "react";
import { Table, Container, Button, Row, Col } from "reactstrap";
import EventUpdate from "./EventUpdate";

const EventTableAndDelete = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  const deleteEvent = (eventInfoUpdate) => {
    fetch(`http://localhost:3000/events/delete/${eventInfoUpdate.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchEventInfo());
  };

  const eventMap = () => {
    return props.events.map((eventInfoUpdate, index) => {
      return (
        // <div>

        <tr key={index}>
          <th scope="row">{eventInfoUpdate.id}</th>
          <td>{eventInfoUpdate.raceName}</td>
          <td>{eventInfoUpdate.location}</td>
          <td>{eventInfoUpdate.length}</td>
          <td>{eventInfoUpdate.date}</td>
          <td>{eventInfoUpdate.startTime}</td>
          {/* </tr>
          <tr key={index}> */}
          <td>{eventInfoUpdate.packList}</td>
          <td>{eventInfoUpdate.lodging}</td>
          <td>{eventInfoUpdate.travelPlan}</td>
          <td>
            <Button
              color="primary"
              id="Popover1"
              onClick={() => {
                props.editEvent(eventInfoUpdate);
                toggle();
              }}
            >
              Update
            </Button>

            {popoverOpen ? (
              <EventUpdate
                updateEvent={props.updateEvent}
                token={props.token}
                updateOff={props.updateOff}
                fetchEventInfo={props.fetchEventInfo}
                popoverOpen={popoverOpen}
                toggle={toggle}
              />
            ) : (
              <></>
            )}

            {/* <Button color="warning" id="Popover1" onClick={() => {props.editEvent(eventInfoUpdate); props.updateOn()}}>Update</Button>

            {props.updateRace ? <EventUpdate updateEvent={props.updateEvent} token={props.token} updateOff={props.updateOff}  fetchEventInfo={props.fetchEventInfo} popoverOpen={popoverOpen} toggle={toggle} /> : <></>} */}

            <Button
              color="danger"
              onClick={() => {
                deleteEvent(eventInfoUpdate);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>

        // </div>
      );
    });
  };

  return (
    <div>
      {/* <h1 className="placeholder">CURRENT RACES</h1> */}
      <Container>
        {/* <Col md="9"> */}
        <div className="columnHeader" style={{ width: "90%" }}>
          <h2>Current Races</h2>
        </div>
        {/* </Col> */}
        <Table bordered hover id="table">
          {/* <Table bordered className="text-white"> */}
          <thead>
            <tr>
              <th>#</th>
              <th>Race Name</th>
              <th>Location</th>
              <th>Length</th>
              <th>Date of Race</th>
              <th>Start Time</th>
              <th>Packing List</th>
              <th>Lodging Plans</th>
              <th>Travel Plans</th>
            </tr>
          </thead>
          <tbody>
            {eventMap()}
            {/* {props.updateRace ? <EventUpdate updateEvent={props.updateEvent} token={props.token} updateOff={props.updateOff}  fetchEventInfo={props.fetchEventInfo} popoverOpen={popoverOpen} toggle={toggle} /> : <></>} */}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default EventTableAndDelete;
