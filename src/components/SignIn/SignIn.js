import React, {useState} from "react";
import { Link } from "@reach/router";
import { auth } from "../../Firebase";


import log from '../../img/login-page.png';
import confetti from '../../img/confetti.png';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event, email, password) => {
      event.preventDefault();
      auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
        console.error("Error signing in with password and email", error);
      });
    };

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };



  return (
    <div className="mt-8">
      <img className="Log-img" src={log} />
      <img className="confetti" src={confetti} />
        <p className="SignUp">
          Sign In
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

          <button className="SignUp-button" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
        </form>
        <p className="Sign-in-here">
          Don't have an account?{" "}
          <Link to="signUp">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignIn;