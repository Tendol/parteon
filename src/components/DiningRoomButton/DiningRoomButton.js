import React from 'react';
import './DiningRoomButton.css';

/**
 * Props:
 * - disabled: boolean
 * - onClick: () => ()
 */
export default function DiningRoomButton(props) {
  return (
    <button
      className="dining-room-button"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      Dining Room
    </button>
  );
}
