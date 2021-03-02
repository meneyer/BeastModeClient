import React, { useState, useEffect } from "react";
import {
  Table,
  Container,
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  Collapse,
} from "reactstrap";

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

  const PopoverContent = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <PopoverHeader>
          Are you sure you want to delete this event? (This CANNOT be undone)
        </PopoverHeader>
        <PopoverBody>
          <Button
            outline
            color="danger"
            onClick={() => {
              setIsOpen(!isOpen);
              {
                deleteEvent(props.eventInfoUpdate);
              }
            }}
          >
            Confirm Delete
          </Button>
          <Collapse
            isOpen={isOpen}
            onEntered={props.confirmDelete}
            onExited={props.confirmDelete}
          >
            Click to Confirm Delete
          </Collapse>
        </PopoverBody>
      </>
    );
  };

  useEffect(() => {
    eventMap();
  }, [props.events]);

  const eventMap = () => {
    return props.events.map((eventInfoUpdate, index) => {
      return (
        <tr key={index}>
          <th style={{ border: "none" }} scope="row">
            {eventInfoUpdate.id}
          </th>
          <td>{eventInfoUpdate.raceName}</td>
          <td>{eventInfoUpdate.location}</td>
          <td>{eventInfoUpdate.length}</td>
          <td>{eventInfoUpdate.date}</td>
          <td>{eventInfoUpdate.startTime}</td>
          <td>{eventInfoUpdate.packList}</td>
          <td>{eventInfoUpdate.lodging}</td>
          <td>{eventInfoUpdate.travelPlan}</td>
          <div>
            <Button
              className="tableBtn updateBtn"
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

            <div className="text-center">
              <Button
                className="tableBtn deleteBtn"
                color="danger"
                id="DeleteButtonOne"
                type="button"
              >
                Delete
              </Button>

              <UncontrolledPopover
                trigger="legacy"
                placement="top"
                target="DeleteButtonOne"
              >
                {({ confirmDelete }) => (
                  <PopoverContent
                    confirmDelete={confirmDelete}
                    eventInfoUpdate={eventInfoUpdate}
                  />
                )}
              </UncontrolledPopover>
            </div>

            {/* <Button color="danger" onClick={() => {deleteEvent(eventInfoUpdate)}}>Delete</Button> */}

            {/* <Button color="danger" onClick={() => {deleteEvent(eventInfoUpdate)}}>Delete</Button> */}
          </div>
        </tr>
      );
    });
  };

  return (
    <div>
      {/* <h1 className="placeholder">CURRENT RACES</h1> */}
      <Container style={{ padding: "20px" }}>
        {/* <Col md="9"> */}
        <div className="columnHeader" style={{ width: "100%" }}>
          <h2>Current Races</h2>
        </div>
        {/* </Col> */}
        <Table responsive bordered hover id="table">
          <thead>
            <tr>
              <th>Entry #</th>
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
// }

export default EventTableAndDelete;
