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
  const [email, setEmail] = useState("");
  const [raceName, setRaceName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.token);
    fetch("http://localhost:3000/messageboard/create", {
      method: "POST",
      body: JSON.stringify({
        messageboard: {
          name: name,
          email: email,
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
        setEmail("");
        setRaceName("");
        setMessage("");

        props.fetchMessages();
      });
  };

  return (
    <div style={{ paddingBottom: "40px"}}>
      <Container>
        <h1>Post Your Messages Here</h1>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  name="name"
                  value={name}
                  placeholder="Who are you?"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="yourname@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="RaceName">Race You're Attending</Label>
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
                type="textarea"
                maxLength="2000"
                  name="Message"
                  value={message}
                  placeholder="Messages are shared by everyone. (Maximum Length = 2000 characters)"
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
