import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(email,password);
        //keeps page from reloading after submit
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify({user:{email: email, password: password}}),
            //changed password to passwordhash
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then (
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
            console.log("User logged in!")
            setSuccess("Logged In!")
            props.setOpen(false);
        })
        .catch((err) => console.log(err));
    }

    return ( 
        <div>
            <form >
            <label>Login</label><br />
            <TextField id="outlined-basic" label="email" variant="outlined" onChange={(e) => setEmail(e.target.value)}
                    name="email" value={email}/>
            <br/>
            <TextField id="outlined-basic" label="password" variant="outlined" onChange={(e) => setPassword(e.target.value)}
                    name="password" value={password}/>
            <br/>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
            </Button>
            <p>{success}</p>
        </form>
        </div>
     );
}
 
export default Login;