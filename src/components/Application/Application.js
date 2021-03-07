import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import ProfilePage from "../ProfilePage/ProfilePage";
import { UserContext } from "../Providers/UserProvider";


function Application() {
  const user = useContext(UserContext);

  return (
        user ?
        <ProfilePage />
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
        </Router>

  );
}
export default Application;