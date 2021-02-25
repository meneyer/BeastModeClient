import React, { useState } from "react";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [nope, setNope] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(email,password);
    //keeps page from reloading after submit
    fetch("http://localhost:3000/user/login", {
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
        console.log("User logged in!");
        setSuccess("Logged In!");
        setNope("");
        props.setOpen(false);
      })
      .catch((err) => 
        {console.log(err)
        setNope("*Not a valid email/password combination")
      });
      //TODO: Add error message to user if unable to login?
  };

  return (
    <div>
      <Form>
        <Label>
          <h3 className="modalTitle">Login</h3>
        </Label>
        <FormGroup>
          <Label className="modalLabel" for="email">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="loginEmail"
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
            id="loginPassword"
            placeholder=""
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </FormGroup>
        <Button className="modalBtn" onClick={handleSubmit}>
          Submit
        </Button>
        <p>{nope}</p>
      </Form>
    </div>
  );
};

export default Login;
