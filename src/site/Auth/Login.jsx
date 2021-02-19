import React, { useState } from "react";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");

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
        props.setOpen(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form>
        <Label>Login</Label>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder=""
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </FormGroup>
        <Button color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
