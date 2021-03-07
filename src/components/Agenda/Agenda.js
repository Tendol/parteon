import React, {useState} from 'react';
import './Agenda.css';
import agenda from '../../img/agenda.png';

export default function Agenda(props) {

const [isOpen, setIsOpen] = useState(false);


const handleShowDialog = () => {
  setIsOpen(!isOpen);
  console.log("cliked");
};
    return (
      <div>
        <button
          className="agenda-button"
        onClick={handleShowDialog}
        >
          Agenda
        </button>
          
        {isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={handleShowDialog}
          >
            <img
              className="image"
              src={agenda}
              onClick={handleShowDialog}
              alt="no image"
            />
          </dialog>
        )}
      </div>
    );
}