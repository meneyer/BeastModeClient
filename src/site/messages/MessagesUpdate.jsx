import React, { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";

const MessagesUpdate = (props) => {
  // console.log(props.updateMessage);

  const [editRaceName, setEditRaceName] = useState(props.updateMessage.raceName);
  const [editMessageText, seteditMessageText] = useState(props.updateMessage.message);
  const [editName, seteditName] = useState(props.updateMessage.name);
  const [editEmail, seteditEmail] = useState(props.updateMessage.email);
  // const [editRaceName, setEditRaceName] = useState('');
  // const [editMessageText, seteditMessageText] = useState('');
  // const [editName, seteditName] = useState('');
  // const [editEmail, seteditEmail] = useState('');
  // const [editCreatedAt, seteditCreatedAt] = useState(
  //   props.updateMessage.createdAt
  // );
//   const [editPackList, setEditPackList] = useState(props.updateMessage.packList);
//   const [editLodging, setEditLodging] = useState(props.updateMessage.lodging);
//   const [editTravelPlan, setEditTravelPlan] = useState(
//     props.updateMessage.travelPlan
//   );

  const messageUpdate = (message, updateMessage) => {
    message.preventDefault();
    fetch(`http://localhost:3000/messageboard/update/${props.updateMessage.id}`, {
      method: "PUT",
      body: JSON.stringify({
        messageboard: {
          name: editName,
          email: editEmail,
          raceName: editRaceName,
          message: editMessageText
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then((res) => {
      props.fetchMessages();
      // props.updateOff();
      props.toggle();
    });
  };

  // const [popoverOpen, setPopoverOpen] = useState(false);

  // const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <p className="placeholder"></p>
      <Container>
        {/* <Button id="Popover1" type="button"> */}
        {/* <Button type="button">
                Update Your Race Details
            </Button> */}
        <Popover
          placement="bottom"
          isOpen={props.popoverOpen}
          target="Popover1"
          toggle={props.toggle}
        >
          <PopoverHeader>Update Your Messageboard Post</PopoverHeader>
          <PopoverBody>
            <Form onSubmit={messageUpdate}>
              <FormGroup>
                <Label htmlFor="raceName">Race Name</Label>
                <Input
                  name="raceName"
                  value={editRaceName}
                  onChange={(e) => setEditRaceName(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <Input
                  name="message"
                  type="textarea"
                  maxLength="2000"
                  value={editMessageText}
                  onChange={(e) => seteditMessageText(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  name="name"
                  value={editName}
                  onChange={(e) => seteditName(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  value={editEmail}
                  onChange={(e) => seteditEmail(e.target.value)}
                />
              </FormGroup>

             <Button color="primary" type="submit">
                Update Your Messageboard Post!
              </Button>
            </Form>
          </PopoverBody>
        </Popover>
      </Container>
    </div>
  );
};

export default MessagesUpdate;
