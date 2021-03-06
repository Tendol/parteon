import React, {useState} from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import Info from './components/Info';

import log from './login-page.png';

import { FormGroup, Input } from "reactstrap";

function App() {
  const [status, setStatus] = useState("logout")
  if (status == "logout") {
    return (
      <div className="App">
        <img className="Log-img" src={log} />
          <p className="SignUp">
            Sign Up
          </p>
          <p className="Sub-SignUp"> 
          for the party 
          </p>
          <FormGroup>
            <Input
              type="text"
              placeholder="YOUR NAME"
              className="Name"
            />
            <Input
              type="text"
              placeholder="EMAIL"
              className="Email"
            />
            <Input
              type="text"
              placeholder="CHOOSE A PASSWORD"
              className="Password"
            />
          </FormGroup>
          <button className="SignUp-button"> Sign Up</button>
  
          <div className="Google-login">
            <Login status={log => setStatus(log)}/>
            {console.log("status: ", status)}
          </div>
      </div>
    );
  }
  else{
    return(
      <div>
        <Home/>
        <div className="Google-logout">
          <Logout  status={log=>setStatus(log)}/>
          {console.log("status: ", status)}
        </div>
 
      </div>
    )
  }

}

export default App;
