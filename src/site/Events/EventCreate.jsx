import React, { useState } from 'react';
import {Container, Row, Col, Button, Form, FormGroup, FormText, Label, Input} from 'reactstrap';


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
            body: JSON.stringify({events: {raceName: raceName, location: location, length: length, date: date, startTime: startTime, packList: packList, lodging: lodging, travelPlan:travelPlan}}),
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
            <Container>
                <div className="columnHeader" style={{ width: "90%"}}><h2>Enter Your Race Details</h2></div>           
                {/* <h2>It's almost RACE DAY!</h2>
                <h4>Enter your details below</h4> */}
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit} > 
                        <FormGroup>
                            <br />
                                <Label htmlFor="raceName">Race Name</Label>
                                <Input name = "raceName" value={raceName} placeholder = "Spartan Race, Savage Race, Tough Mudder, Rugged Maniac, etc." onChange={(e) =>setRaceName(e.target.value)}/>
                               {/* <FormText> </FormText> */}
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="location">Race Location</Label>
                                <Input name = "location" value={location} placeholder = "Race Location, Parking Details, etc." onChange={(e) =>setLocation(e.target.value)}/>
                                {/* <FormText> </FormText> */}
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="length">Race Length</Label>
                                <Input name = "length" value={length} placeholder = "Sprint, Super, Beast, Ultra, Trail, Stadion, 5K, 10K, Half Marathon, Marathon, etc." onChange={(e) =>setLength(e.target.value)}/>
                                {/* <FormText> </FormText> */}
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="date">Date of Race</Label>
                                <Input name = "date" type="date" value={date} placeholder = "Date of Race" onChange={(e) =>setDate(e.target.value)}/>
                                {/* <FormText> </FormText> */}
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="Race Start Time">Start Time</Label>
                                <Input name = "startTime" type="time" value={startTime} placeholder = "Wave Start Time" onChange={(e) =>setStartTime(e.target.value)}/>
                                {/* <FormText> </FormText> */}
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="packList">Packing List</Label>
                                <Input type="textarea" name = "packList" maxlength="1000" value={packList} placeholder = "Trashbags, Towels, Racing Shoes, Gels, Hydration Pack, Salt, Cash, ID, Race Confirmation Number, etc.  (Maximum Length = 1000 characters)" onChange={(e) =>setPackList(e.target.value)}/>
                                {/* <FormText></FormText> */}
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="lodging">Lodging Plans</Label>
                                <Input name = "lodging" value={lodging} placeholder = "Hotel: Name, Address, Confirmation Number;  Friend's Home: Address, Phone Number, Arrival Time" onChange={(e) =>setLodging(e.target.value)}/>
                                {/* <FormText> </FormText> */}
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="travelPlan">Travel Plans</Label>
                                <Input type="textarea" maxlength="1500" name = "travelPlan" placeholder = "General Travel Plans - Flight Details, Transportation to the Venue, Team Meet-ups, Favorite Restaraunts, Sites Seeing Opportunities, etc.  (Maximum Length = 1500 characters)" value={travelPlan} onChange={(e) =>setTravelPlan(e.target.value)}/> 
                                {/* <FormText> </FormText> */}
                            </FormGroup>

                            <Button color="primary" type="submit">Submit Your Event Details</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default EventCreate;