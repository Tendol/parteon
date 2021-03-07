import React, { useContext, useState } from "react";
import { UserContext } from "../Providers/UserProvider";
import { auth } from "../../Firebase";

import "./ProfilePage.css"
import logo from '../../img/logo.png';
import profile from '../../img/profile.png';

import Lobby from '../Lobby/Lobby';

const ProfilePage = () => {
  const user = useContext(UserContext);
  const { displayName} = user;
  
  const [video, setVideo] = useState("false")
  if(video === "true"){
    return(
      <Lobby /> 
    )
  }
  else{
  return (
    <div className = "mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
      <div>
      <img className="logo-img" src={logo} />
        <p className="Welcome"> Welcome! <br/> Let's get the party started</p>
        <p className="Step-1"> Step 1: Set up your profile</p>
        <p className="Step-2"> Step 2: Let your friends know about you</p>
        <p className="Step-3"> Step 3: Start creating a celebration</p>
      </div>
      <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
        <div>
          <img className="profile" src={profile} />
          <h2 className = "profile-name">{displayName}</h2>
        </div>
      </div>
      <button className="sign-out" onClick = {() => {auth.signOut()}}>Sign out</button>
      <button className="video" onClick = {()=>setVideo("true")}> Video</button>
    </div>
  ) 
  }
};
export default ProfilePage;