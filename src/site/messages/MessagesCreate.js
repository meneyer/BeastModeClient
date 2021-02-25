import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const MessagesCreate = (props) => {
  const [name, setName] = useState("");
  const [raceName, setRaceName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/messageboard/create", {
      method: "POST",
      body: JSON.stringify({
        messageboard: {
          name: name,
          raceName: raceName,
          message: message,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        setName("");
        setRaceName("");
        setMessage("");
        props.fetchMessages();
      });
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Container>
        <h1>Post Your Messages Here</h1>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="Name">Your Name</Label>
                <Input
                  name="Name"
                  value={name}
                  placeholder="Who are you?"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="RaceName">Race Your Attending</Label>
                <Input
                  name="RaceName"
                  value={raceName}
                  placeholder="Spartan Race, Savage Race, Tough Mudder, Rugged Maniac, etc."
                  onChange={(e) => setRaceName(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="Message">What's on your Mind?</Label>
                <Input
                  name="Message"
                  value={message}
                  placeholder="Messages are shared by everyone"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormGroup>
              <Button type="submit">Send us your message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MessagesCreate;
