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
    <div style={{ paddingBottom: "40px" }}>
      <Container>
        <div
          className="columnHeader"
          style={{ margin: "auto", width: "100%", minWidth: "300px" }}
        >
          <h2>Post Your Messages Here</h2>
        </div>
        <Row id="eventForm" style={{ width: "100%", marginLeft: "0" }}>
          <Col>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label className="eventLabel" htmlFor="name">
                  Your Name
                </Label>
                <Input
                  name="name"
                  value={name}
                  placeholder="Who are you?"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label className="eventLabel" for="email">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="yourname@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label className="eventLabel" htmlFor="RaceName">
                  Race You're Attending
                </Label>
                <Input
                  name="RaceName"
                  value={raceName}
                  placeholder="Spartan Race, Savage Race, Tough Mudder, Rugged Maniac, etc."
                  onChange={(e) => setRaceName(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label className="eventLabel" htmlFor="Message">
                  What's on your Mind?
                </Label>
                <Input
                  type="textarea"
                  name="Message"
                  value={message}
                  placeholder="Messages are shared by everyone"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormGroup>
              <Button
                className="eventSubmitBtn"
                style={{ margin: "20px" }}
                outline
                type="submit"
              >
                Send us your message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MessagesCreate;
