import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

        //TODO ---WORK ON THIS REGEX!
        if (!R.test(email)) {
            alert("Must use valid email address");
            return;
        }
        
        fetch('http://localhost:3000/user/create', {
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
            console.log("Account created!")
            setSuccess("Account Created!")
            props.setOpen(false);
        })
        .catch((err) => console.log(err))
    }

    return ( 
        <div>
            <form >
                <label>Create New Account</label><br />
                <TextField required id="email outlined-required" label="email" variant="outlined" onChange={(e) => setEmail(e.target.value)}
                        name="email" value={email}/>
                <br/>
                <TextField required id="password outlined-required" type="password" label="password" variant="outlined" onChange={(e) => setPassword(e.target.value)}
                        name="password" value={password}/>
                <br/>
                <Button variant="contained" color="primary" onClick={handleSubmit}>           
                Submit
                </Button>
            </form>
            <p>{success}</p>
        </div>
     );
}
 
export default Create;