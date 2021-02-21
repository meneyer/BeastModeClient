import React from "react";
import {Table, Container, Button} from 'reactstrap';

const EventTableAndDelete = (props) => {

  const deleteEvent = (eventInfoUpdate) => {
    fetch(`http://localhost:3000/events/delete/${eventInfoUpdate.id}`, {
        method: 'DELETE',
        headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization' : props.token
            })
        })
        .then(() => props.fetchEventInfo())
    }

  const eventMap = () => {
    return props.events.map((eventInfoUpdate, index) => {
      return(
        <tr key={index}>
          <th scope = "row">{eventInfoUpdate.id}</th>
          <td>{eventInfoUpdate.raceName}</td>
          <td>{eventInfoUpdate.location}</td>
          <td>{eventInfoUpdate.length}</td>
          <td>{eventInfoUpdate.date}</td>
          <td>{eventInfoUpdate.startTime}</td>
          <td>{eventInfoUpdate.packList}</td>
          <td>{eventInfoUpdate.lodging}</td>
          <td>{eventInfoUpdate.travelPlan}</td>
          <td>
            <Button color="warning" onClick={() => {props.editEvent(eventInfoUpdate); props.updateOn()}}>Update</Button>
            <Button color="danger" onClick={() => {deleteEvent(eventInfoUpdate)}}>Delete</Button>
          </td>
        </tr>
      )
    })
  }
  
  
  return (
    <div>
      <Container>
      <h1 className="placeholder">CURRENT RACES</h1>
        {/* <Table bordered hover className="text-white"> */}
        <Table bordered className="text-white">
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
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default EventTableAndDelete;
