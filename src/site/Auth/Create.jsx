import React, { useState } from "react";
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Create = (props) => {
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //keeps page from reloading after submit
    // console.log(email,password);
    if (password.length < 5) {
      alert("password must be at least 5 characters");
      return;
    }
    let R = new RegExp(/[^@]+@[^@]+\.[^@]+/g);

    //Might not need this Regex, the form may handle it.
    if (!R.test(email)) {
      alert("Must use valid email address");
      return;
    }

    fetch("http://localhost:3000/user/create", {
      method: "POST",
      body: JSON.stringify({ user: { email: email, password: password } }),
      //changed password to passwordhash
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
        console.log("Account created!");
        setSuccess("Account Created!");
        props.setOpen(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form>
        <Label>
          <h3 className="modalTitle">Create New Account</h3>
        </Label>
        <FormGroup>
          <Label className="modalLabel" for="email">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="createEmail"
            placeholder=""
            onChange={(e) => {
              setEmail(e.target.value);
              localStorage.setItem("beastEmail", e.target.value);
            }}
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label className="modalLabel" for="password">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="createPassword"
            placeholder=""
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </FormGroup>
        <Button className="modalBtn" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <p>{success}</p>
    </div>
  );
};

export default Create;
