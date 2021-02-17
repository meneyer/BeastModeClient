import './App.css';
import NavigationBar from './site/NavBar';
import React, { useState, useEffect } from 'react';
import LoggedIn from './site/Auth/LoggedIn';
import BeforeLogIn from './site/Auth/BeforeLogin';

function App() {
  // app.get('/*', function(req, res) {
  //   res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function(err) {
  //     if (err) {
  //       res.status(500).send(err)
  //     }
  //   })
  // })


  const [sessionToken, setSessionToken] = useState('');
  //using useState Hook to create a new state variable, sessionToken, will be empty, then have value, then emptied again

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])
  //only runs on initial component load, because dependency is set to nothing. Just sets token to the localStorage token, if it exists

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }
  //this takes a token (from API call) and sets it in both localStorage and in the variable.

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
    console.log("Token cleared and Logged out")
  }

  const loggedInVsOut = () => {
    return (sessionToken === localStorage.getItem('token') ? <LoggedIn token={sessionToken} /> : <BeforeLogIn updateToken={updateToken} /> )
  }


  return (
    <div>
      <NavigationBar updateToken={updateToken} clearToken={clearToken} token={sessionToken}/>
      
      {loggedInVsOut()}
    </div>
  );
}

export default App;
