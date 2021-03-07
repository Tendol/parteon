import React from "react";
import {Input } from "reactstrap";

import "./Info.css"

const Info = ()=>{
    return(
        <div> 
            <div className="Info-title-box">
                <p> SHARE WITH US!</p>
            </div>
            <p className="Question-1"> What are you hobbies?</p>
            <Input
              type="text"
              placeholder="Type your answer"
              className="Answer-1"
            />
            <p className="Question-2"> What are your favorite music genre? </p>
            <Input
              type="text"
              placeholder="Type your answer"
              className="Answer-2"
            />
            <p className="Question-3"> What are your wish lists?</p>
            <Input
              type="text"
              placeholder="Type your answer"
              className="Answer-3"
            />
            <p className="Question-4"> How old are you this year? </p>
            <Input
              type="text"
              placeholder="Type your answer"
              className="Answer-4"
            />
            <button className="Share-profile"> Share Profile </button>
        </div>
    );
}

export default Info;