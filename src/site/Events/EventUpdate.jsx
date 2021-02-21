import React, { useState } from "react";
import { Container, Row, Col, Button, Form, FormGroup, FormText, Label, Input } from 'reactstrap';

const EventUpdate = (props) => {

    const [editRaceName, setEditRaceName] = useState(props.eventInfoUpdate.raceName);
    const [editLocation, setEditLocation] = useState(props.eventInfoUpdate.location);
    const [editLength, setEditLength] = useState(props.eventInfoUpdate.length);
    const [editDate, setEditDate] = useState(props.eventInfoUpdate.date);
    const [editStartTime, setEditStartTime] = useState(props.eventInfoUpdate.startTime);
    const [editPackList, setEditPackList] = useState(props.eventInfoUpdate.packList);
    const [editLodging, setEditLodging] = useState(props.eventInfoUpdate.lodging);
    const [editTravelPlan, setEditTravelPlan] = useState(props.eventInfoUpdate.travelPlan);

    const eventUpdate  = (event, updateEvent) => {
        event.preventDefault();
        fetch(`http://localhost:3000/events/update/:travelPlanId`, {
        method: 'PUT', 
        body: JSON.stringify({events: {raceName: editRaceName, location: editLocation, length: editLength, date: editDate, startTime: editStartTime, packList: editPackList, lodging: editLodging, travelPlan:editTravelPlan}}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
        })
        .then((res) => {
            props.fetchEventInfo();
            props.updateOff();
        })
    }
    return (
        <div>   
        <p className="placeholder"></p>
        <Container>
                <h2>It's almost RACE DAY!</h2>
                <h4>Update your details below</h4>
            <Row>
                <Col>
                    <Form onSubmit={eventUpdate}> 
                    <FormGroup>
                            <Label htmlFor="raceName">Race Name</Label>
                            <Input name = "raceName" value={editRaceName}  onChange={(e) =>setEditRaceName(e.target.value)}/>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="location">Race Location</Label>
                            <Input name = "location" value={editLocation} onChange={(e) =>setEditLocation(e.target.value)}/>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="length">Race Length</Label>
                            <Input name = "length" value={editLength}  onChange={(e) =>setEditLength(e.target.value)}/>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="date">Date of Race</Label>
                            <Input name = "date" type="date" value={editDate}  onChange={(e) =>setEditDate(e.target.value)}/>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="Race Start Time">Start Time</Label>
                            <Input name = "startTime" type="time" value={editStartTime}  onChange={(e) =>setEditStartTime(e.target.value)}/>
                            <FormText> </FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="packList">Packing List</Label>
                            <Input type="textarea" name = "packList" value={editPackList}  onChange={(e) =>setEditPackList(e.target.value)}/>
                            <FormText> </FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="lodging">Lodging Plans</Label>
                            <Input name = "lodging" value={editLodging}  onChange={(e) =>setEditLodging(e.target.value)}/>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="travelPlan">Travel Plans</Label>
                            <Input type="textarea" name = "travelPlan"  value={editTravelPlan} onChange={(e) =>setEditTravelPlan(e.target.value)}/>  
                        </FormGroup>

                        <Button type="submit">Update Your Event Details!</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default EventUpdate;
