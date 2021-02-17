import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';


const EventCreate = (props) => {

    const [raceName, setRaceName] = useState('');
    const [location, setLocation] = useState('');
    const [length, setLength] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [packList, setPackList] = useState('');
    const [lodging, setLodging] = useState('');
    const [travelPlan, setTravelPlan] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/events/create', {
            method: 'POST',
            body: JSON.stringify({create: {raceName: raceName, location: location, length: length, date: date, startTime: startTime, packList: packList, lodging: lodging, travelPlan:travelPlan}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization' : props.token
            })
        }).then((res) => res.json())
        .then((logData) => {            
            console.log(logData)
            setRaceName('');
            setLocation('');
            setLength('');
            setDate('');
            setStartTime('');
            setPackList('');
            setLodging('');
            setTravelPlan('');
            props.fetchEventInfo();
        })
    }

    return (
        <div>
            <h2>It's almost RACE DAY!</h2>
            <h4>Enter your details below</h4>
            <Form onSubmit={handleSubmit}> 
            <FormGroup>
                    <Label htmlFor="raceName"/>
                    <Input name = "raceName" value={raceName} onChange={(e) =>setRaceName(e.target.value)}/>
                    <option>Race Name</option>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="location"/>
                    <Input name = "location" value={location} onChange={(e) =>setLocation(e.target.value)}/>
                    <option>Race Location</option>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="length"/>
                    <Input name = "length" value={length} onChange={(e) =>setLength(e.target.value)}/>
                    <option>Race Distance</option>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="date"/>
                    <Input name = "date" value={date} onChange={(e) =>setDate(e.target.value)}/>
                    <option>Race Date</option>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="startTime"/>
                    <Input name = "startTime" value={startTime} onChange={(e) =>setStartTime(e.target.value)}/>
                    <option>Start Time</option>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="packList"/>
                    <Input name = "packList" value={packList} onChange={(e) =>setPackList(e.target.value)}/>
                    <option>Pack List</option>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lodging"/>
                    <Input name = "lodging" value={lodging} onChange={(e) =>setLodging(e.target.value)}/>
                    <option>Lodging Plan</option>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="travelPlan"/>
                    <Input name = "travelPlan" value={travelPlan} onChange={(e) =>setTravelPlan(e.target.value)}/>
                    <option>Travel Plan</option>
                </FormGroup>
                <Button type="submit">Submit Your Event Details</Button>
            </Form>
        </div>
    );
}

export default EventCreate;