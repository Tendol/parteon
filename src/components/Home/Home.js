import React from "react";
import "./Home.css"

const Home = ()=>{
    return(
        <div> 
            <button className="New-celebration"> CREATE A NEW CELEBRATION </button>
            <button className="Calendar"> FRIENDS BIRTHDAY CALENDAR  </button>
            <button className="Past-celebration"> PAST CELEBRATIONS  </button>
        </div>
    );
}

export default Home;