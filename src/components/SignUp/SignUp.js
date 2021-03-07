import React, { useState } from "react";
import { Link } from "@reach/router";
import { auth, generateUserDocument } from "../../Firebase";

import log from '../../img/login-page.png';
import confetti from '../../img/confetti.png';

import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <div className="mt-8">
      <img className="Log-img" src={log} />
      <img className="confetti" src={confetti} />
        <p className="SignUp">
          Sign Up
        </p>
        <p className="Sub-SignUp"> 
        for the party 
        </p>
      <div>
        {error !== null && (
          <div className="Error">
            <i>{error}</i>
          </div>
        )}
        <form className="">
          <input
            type="text"
            className="Name"
            name="displayName"
            value={displayName}
            placeholder="YOUR NAME"
            id="displayName"
            onChange={event => onChangeHandler(event)}
          />

          <input
            type="email"
            className="Email"
            name="userEmail"
            value={email}
            placeholder="EMAIL"
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
          <input
            type="password"
            className="Password"
            name="userPassword"
            value={password}
            placeholder="YOUR PASSWORD"
            id="userPassword"
            onChange={event => onChangeHandler(event)}
          />
          <button
            className="SignUp-button"
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </button>
        </form>
        <p className="Sign-in-here">
          Already have an account?{" "}
          <Link to="/">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;