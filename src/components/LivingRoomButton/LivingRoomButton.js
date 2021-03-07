import React from 'react';
import './LivingRoomButton.css';

/**
 * Props:
 * - disabled: boolean
 * - onClick: () => ()
 */
export default function LivingRoomButton(props) {
  return (
    <button
      className="living-room-button"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      Living Room
    </button>
  );
}
