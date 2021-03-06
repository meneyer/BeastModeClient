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
import APIURL from "../../helpers/environment";
import MessagesUpdate from "./MessagesUpdate";

//This Component is for Displaying Message Board posts on the main LoggedIn.jsx page

const MessageUpdateDelete = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const [logData, setLogData] = useState([]);
  console.log(props.updateMessage);
  console.log(props.messages);

  useEffect(() => {
    props.fetchforId();
    mbMap();
  }, []);

  const deleteMessage = (messagesInfo) => {
    console.log(`id to be deleted -> ${messagesInfo.id}`);
    fetch(`${APIURL}/messageboard/delete/${messagesInfo.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchMessages());
  };

  const PopoverContent = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <PopoverHeader>
          Are you sure you want to delete this message? (This CANNOT be undone)
        </PopoverHeader>
        <PopoverBody>
          <Button
            outline
            color="danger"
            onClick={() => {
              setIsOpen(!isOpen);
              {
                deleteMessage(props.messagesInfo);
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

  const mbMap = () => {
    //Because of .slice method will only return the most recent 10
    return props.messages.slice(0, 11).map((messagesInfo) => {
      return (
        // <div>

        <div key={messagesInfo.id}>
          <div id="singleEvent">
            <span style={{ fontSize: "1.5em" }}>
              <b>{messagesInfo.raceName}</b>
            </span>
            <br />
            <span>{messagesInfo.message}</span>
            <br />
            <span style={{ fontSize: "1em" }}>
              <b>
                <i>{messagesInfo.name}</i>
              </b>
            </span>{" "}
            -
            <span style={{ fontSize: "1em" }}>
              <i>{messagesInfo.email}</i>
            </span>
            <br />
            <span>{messagesInfo.createdAt.slice(0, 10)}</span>
            <br />
            {/* UPDATE BUTTON */}
            {console.log(
              `checking owner --> ${localStorage.getItem(
                "owner"
              )} vs messageowner --> ${messagesInfo.owner}`
            )}
            {localStorage.getItem("owner") == messagesInfo.owner ? (
              <span>
                <Button
                  className="tableBtn updateBtn"
                  id="Popover1"
                  onClick={() => {
                    props.editMessage(messagesInfo);
                    toggle();
                  }}
                >
                  Update
                </Button>
                {popoverOpen ? (
                  <MessagesUpdate
                    updateMessage={props.updateMessage}
                    token={props.token}
                    updateOff={props.updateOff}
                    fetchMessages={props.fetchMessages}
                    popoverOpen={popoverOpen}
                    toggle={toggle}
                  />
                ) : (
                  <></>
                )}

                {/*           OLD FUN POPOVER BUTTON
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
                    messagesInfo={messagesInfo}
                  />
                )}
              </UncontrolledPopover> */}

                <Button
                  className="tableBtn deleteBtn"
                  id="DeleteButtonOne"
                  color="danger"
                  type="button"
                  onClick={() => {
                    deleteMessage(messagesInfo);
                  }}
                >
                  Delete
                </Button>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      );
    });
  };

  return <div>{props.messages !== undefined ? mbMap() : ""}</div>;
};

export default MessageUpdateDelete;

// pass mapping of every message, build a div or card, name, race, email, message
// Make calls for updates and displays message object
