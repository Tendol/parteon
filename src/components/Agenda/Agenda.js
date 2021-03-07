import React from 'react';
import './Agenda.css';

/**
 * Props:
 * - disabled: boolean
 * - onClick: () => ()
 */
export default function Agenda(props) {
  return (
    <button
      className="agenda-button"
      onClick={props.onClick}
    >
      Agenda
    </button>
  );
}
