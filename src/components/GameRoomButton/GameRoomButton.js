import React from 'react';
import './GameRoomButton.css';

/**
 * Props:
 * - disabled: boolean
 * - onClick: () => ()
 */
export default function GameRoomButton(props) {
  return (
    <button
      className="game-room-button"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      Game Room
    </button>
  );
}
